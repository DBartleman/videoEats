const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User, Review, StatusType } = require('../db/models');
const { getUserToken, requireAuth } = require('../utils/auth.js');

//validate Password
const router = express.Router();

const validateUsername =
    check("userName")
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

//routes

//create user
router.post('/', validateUsername, validateEmailAndPassword, handleValidationErrors, asyncHandler(async (req, res) => {
    const { userName, firstName, lastName, email, password, revScore, statusTypeId } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        userName, firstName, lastName, email,
        hashedPass, revScore, statusTypeId: parseInt(statusTypeId)
    });

    const token = getUserToken(user);
    res.status(201).json({
        user: { id: user.id },
        token,
    });
})
);

//get specific user
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        include: [{ model: StatusType, attributes: ['type'] }],
        attributes: ['userName', 'firstName', 'revScore']
    });
    res.json({
        user: {
            id: user.id,
            userName: user.userName,
            firstName: user.firstName,
            revScore: user.revScore,
            statusType: user.StatusType.type
        }
    });
}))

//update specific user
router.put('/:id(\\d+)', validateUsername, validateEmailAndPassword, asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id, {
        include: [{ model: StatusType, attributes: ['type'] }],
    });
    if (user) {
        user.update({ ...req.body });
        res.json({
            user: {
                id: user.id,
                userName: user.userName,
                firstName: user.firstName,
                revScore: user.revScore,
                statusType: user.StatusType.type
            }
        });
    } else {
        const err = new Error();
        err.title = "User Not Found";
        err.status = 404
        next(err);
    }
}));

//delete specific user
router.delete('/:id(\\d+)', validateUsername, validateEmailAndPassword, asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id, {
        attributes: ['id']
    });
    await user.destroy();
    res.end();
}));

//authenticate
router.post('/token', validateEmailAndPassword, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email,
        },
    });
    //pass validate and error handling
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    //login successful
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
}));

//get all reviews for specific user
//functioning 4.21.20
router.get('/:id(\\d+)/reviews',
    //requireAuth, 
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({
            where: { userId: req.params.id },
            order: [['createdAt', 'DESC']]
        });
        res.json({ reviews });
    }))

module.exports = router;