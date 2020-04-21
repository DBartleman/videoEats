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
				name: business.name
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

//returns all business in the database
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const businesses = await Business.findAll({
			attributes: [ 'name', 'address', 'phoneNum', 'hours' ]
		});
		res.json({ businesses });
	})
);

//returns specific business resource **Functioning 4.20.20**
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
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
		});
	})
);

//updates specific business resource **Functioning 4.20.20**
router.put(
	'/:id',
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
			err.title = 'Business Not Found';
			err.status = 404;
			next(err);
		}
	})
);

//deletes a specified business **Functioning 4.20.20**
router.delete(
	'/:id(\\d+)',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const business = await Business.findByPk(req.params.id, {
			attributes: [ 'id' ]
		});
		await business.destroy();
		res.end();
	})
);

//review-based routes
//create a new review for specified business **Functioning 4.20.20**
router.post(
	'/:id(\\d+)/reviews',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const business = await Business.findByPk(req.params.id);
		console.log('business: ', business);
		console.log('id:', business.id);
		console.log('dataValues.id: ', business.dataValues.id);
		const review = await Review.create({ ...req.body.review }); //assumes req body contains 'review' key with corresponding value of an object containing required parameters to construct a new review
		console.log('review: ', review);
		res.status(201).json({
			business: {
				id: business.id,
				name: business.name,
				address: business.address,
				phoneNum: business.phoneNum,
				hours: business.hours,
				description: business.description
			},
			review: {
				id: review.id,
				upVoteCount: review.upVoteCount,
				downVoteCount: review.downVoteCount,
				reviewText: review.reviewText
			}
		});
	})
);

//get all reviews for specified business
//**functioning 4.20.20**
router.get(
	'/:id(\\d+)/reviews',
	//requireAuth, taken out for simple postman tests
	asyncHandler(async (req, res) => {
		const reviews = await Review.findAll({
			where: { businessId: req.params.id },
			//include a bunch of tag/biz/user attributes as required by client
			//include: []
			include: [
				{
					model: Business,
					attributes: [ 'id' ]
				}
			]
		});
		res.json({
			reviews,
			business: { id: req.params.id }
		});
	})
);

//* GET /businesses/:biz_id/reviews/:id - returns a given review
//**functioning 4.21.20**
router.get(
	'/:biz_id(\\d+)/reviews/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const review = await Review.findByPk(req.params.id, {
			include: [
				{
					//do we need to include any specific attributes? Include may be unnecessary.
					model: Business,
					attributes: [ 'id' ]
				}
			]
		});
		res.json({
			review,
			business: { id: req.params.biz_id } //currently redundant with include from 153. Evaluate which is better.
		});
	})
);

//* PUT /businesses/:biz_id/reviews/:id - updates a given review
//**functioning 4.21.20**
router.put(
	'/:biz_id(\\d+)/reviews/:id(\\d+)',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const review = await Review.findByPk(req.params.id);
		if (review) {
			await review.update({ ...req.body.review }); //assumes req body has nested review object
			res.json({
				review: {
					id: review.id,
					upVoteCount: review.upVoteCount,
					downVoteCount: review.downVoteCount,
					videoLink: review.videoLink,
					reviewText: review.reviewText
				}
			});
		} else {
			const err = new Error();
			err.title = 'Review Not Found';
			err.status = 404;
			next(err);
		}
	})
);

//deletes a specified review **Functioning 4.21.20**
router.delete(
	'/:biz_id(\\d+)/reviews/:id(\\d+)',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const review = await Review.findByPk(req.params.id, {
			attributes: [ 'id' ]
		});
		await review.destroy();
		res.end();
	})
);

module.exports = router;
