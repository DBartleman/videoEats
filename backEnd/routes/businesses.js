const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { Business, Review } = require('../db/models');
const { requireAuth } = require('../utils/auth.js');



const router = express.Router();


//Will need route auths for user actions
//multi-roles; user/owner

//routes

//create a new business entity for the database **Functioning 4.20.20**
router.post(
    '/',
    //business-specific validation???
    handleValidationErrors,
    //requireAuth, removed for testing on Postman
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

//returns specific business resource **Functioning 4.20.20**
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

//updates specific business resource **Functioning 4.20.20**
router.put('/:id',
    //requireAuth, removed for postman testing
    asyncHandler(async (req, res) => {
        const business = await Business.findByPk(req.params.id);
        if (business) {
            await business.update({ ...req.body });
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

//deletes a specified business **Functioning 4.20.20**
router.delete('/:id(\\d+)',
    //requireAuth, removed for postman testing
    asyncHandler(async (req, res, next) => {
        const business = await Business.findByPk(req.params.id, {
            attributes: ['id']
        });
        await business.destroy();
        res.end();
    }));

//create a new review for specified business
router.post('/:id(\\d+)/reviews',
    //requireAuth, removed for postman testing
    asyncHandler(async (req, res) => {
        const business = await Business.findByPk(req.params.id);
        const review = await Review.create({ ...req.body.review });//assumes req body contains 'review' key with corresponding value of an object containing required parameters to construct a new review
        res.status(201).json({
            business: {
                id: business.id,
                name: business.name,
                address: business.address,
                phoneNum: business.phoneNum,
                hours: business.hours,
                description: business.description
            },
            review: { ...review }
        });
    })
)

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