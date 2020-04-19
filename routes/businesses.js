const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User, Review } = require('../db/models');
const { getUserToken, requireAuth } = require('../utils/auth.js');

const router = express.Router();

const validateUsername =
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username");

const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
];

router.post(
    '/',
    validateUsername,
    validateEmailAndPassword,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;//what parameters do we need for biz???
        const hashedPassword = await bcrypt.hash(password, 10);
        const business = await Business.create({ username, email, hashedPassword });

        //remove token creation???
        const token = getUserToken(user);
        res.status(201).json({
            user: { id: user.id },
            token,
        });
    })
);

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

router.get('/:id/reviews', requireAuth, asyncHandler(async (req, res) => {
    const businessesId = req.params.id;
    const reviews = await Review.findAll({
        where: { businessId: businessId }
    });
    res.json({ reviews });
}))

module.exports = router;