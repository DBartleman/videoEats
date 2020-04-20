const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { Business, Review } = require('../db/models');
const { requireAuth } = require('../utils/auth.js');

const router = express.Router();

//Will need route auths for user actions
//multi-roles; user/owner

//routes

//create a new business entity for the database
router.post(
    '/',
    //business-specific validation???
    handleValidationErrors,
    requireAuth,
    asyncHandler(async (req, res) => {
        const business = await Business.create({ ...req.body });
        res.status(201).json({
            business: {
                id: business.id,
                name: business.name,
            }
        });

        //remove token creation???
        // const token = getUserToken(user);
        // res.status(201).json({
        //     user: { id: user.id },
        //     business: { id: business.id },
        //     token,
        // });
    })
);

//returns specific business resource
router.get('/:id', asyncHandler(async (req, res) => {
    const business = await Business.findByPk(req.params.id);
    res.json({
        business: {
            id: business.id,
            name: business.name,
            address: business.address,
            phoneNum: business.phoneNum,
            hours: business.hours,
            description: business.description
        }
    })
}))

//updates specific business resource
router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const business = Business.findByPk(req.params.id);
    if (business) {
        business.update({ ...req.body });
        res.json({
            business: {
                id: business.id,
                name: business.name,
                address: business.address,
                phoneNum: business.phoneNum,
                hours: business.hours,
                description: business.description
            }
        });
    } else {
        const err = new Error();
        err.title = "User Not Found";
        err.status = 404
        next(err);
    }
}));

//deletes a specified business
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const business = await Business.findByPk(req.params.id, {
        attributes: ['id']
    });
    await business.destroy();
    res.end();
}));

// router.post('/token',
//     validateEmailAndPassword,
//     asyncHandler(async (req, res, next) => {
//         const { email, password } = req.body;
//         const user = await User.findOne({
//             where: {
//                 email,
//             },
//         });
//         //todo pass validate and error handling
//         if (!user || !user.validatePassword(password)) {
//             const err = new Error("Login failed");
//             err.status = 401;
//             err.title = "Login failed";
//             err.errors = ["The provided credentials were invalid."];
//             return next(err);
//         }
//         //todo token gen
//         const token = getUserToken(user);
//         res.json({ token, user: { id: user.id } });
//     })
// )

//get all reviews for specified business
//unfinished 4.19.20
router.get('/:id/reviews', requireAuth, asyncHandler(async (req, res) => {
    const businessesId = req.params.id;
    const reviews = await Review.findAll({
        where: {
            businessId: businessId,
            //include a bunch of tag/biz/user attributes as required by client
            include: []
        }
    });
    res.json({
        reviews,
        business: { id: business.id }
    });
}))

module.exports = router;