const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { Business, Review, Tag, TagInstance, User } = require('../db/models');
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
	'/:id(\\d+)',
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
	'/:id(\\d+)',
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

//review-based routes**************************************************

//create a new review for specified business **Functioning 4.20.20**
router.post(
	'/:id(\\d+)/reviews',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const business = await Business.findByPk(req.params.id);
		const review = await Review.create({ ...req.body.review }); //assumes req body contains 'review' key with corresponding value of an object containing required parameters to construct a new review
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
					model: User,
					attributes: [ 'id', 'userName', 'firstName', 'lastName' ]
				}
			],
			order: [ [ 'createdAt', 'DESC' ] ]
		});
		res.json({ reviews });
	})
);

//* GET /businesses/:biz_id/reviews/:id - returns a given review
//**functioning 4.21.20**
router.get(
	'/reviews/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const review = await Review.findByPk(req.params.id, {
			include: [
				{
					//do we need to include any specific attributes? Include may be unnecessary.
					model: User,
					attributes: [ 'id', 'userName', 'firstName', 'lastName' ]
				}
			]
		});
		res.json({ review });
	})
);

//* PUT /businesses/:biz_id/reviews/:id - updates a given review
//**functioning 4.21.20**
router.put(
	'/reviews/:id(\\d+)',
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
	'/reviews/:id(\\d+)',
	//requireAuth, removed for postman testing
	asyncHandler(async (req, res) => {
		const review = await Review.findByPk(req.params.id, {
			attributes: [ 'id' ]
		});
		await review.destroy();
		res.end();
	})
);

//**************** Tag-Based Routes ****************************/

//get all searchable tags (for drop-down search/filter)
//**functioning 4.21.20 */
router.get(
	'/tags',
	asyncHandler(async (req, res) => {
		const tags = await Tag.findAll({ attributes: [ 'id', 'type' ] });
		res.json({ tags });
	})
);

//get all tags for specified business
//**functioning 4.21.20 */
router.get(
	'/:id(\\d+)/tags',
	asyncHandler(async (req, res) => {
		const tags = await TagInstance.findAll({
			where: { businessId: req.params.id }
		});
		res.json({ tags });
	})
);

//POST /businesses/:biz_id/reviews/:id/tags
//create new tag and attach to specified review
//functioning 4.22.20
router.post(
	'/:biz_id/reviews/:id/tags',
	//requireAuth
	asyncHandler(async (req, res) => {
		//get review
		//add tag

		//assume req.body has "tag" key with text-value of target tag
		const { tag, userId } = req.body;
		//check database for tag, make it if it's new
		const [ tagType, _created ] = await Tag.findOrCreate({
			where: { type: tag }
		});

		const tagInstance = await TagInstance.create({
			businessId: req.params.biz_id,
			reviewId: req.params.id,
			userId,
			tagId: tagType.id
		});
		res.json({ tagInstance });
	})
);

//update a tag instance (not sure we need this endpoint)
//same as delete (below), except we also pull out tagId from req.body
//functioning 4.22.20
router.put(
	'/reviews/:rev_Id(\\d+)/tags/:id(\\d+)',
	//requireAuth
	asyncHandler(async (req, res, next) => {
		//assumes userId, businessId and reviewId passed in request
		const { userId, businessId } = req.body.tagInstance;

		const tagInstance = await TagInstance.findOne({
			where: {
				reviewId: req.params.rev_Id,
				businessId,
				userId,
				tagId: req.params.id
				//$and: [{ businessId }, { userId }],
				// $and: { userId }
			}
		});
		if (tagInstance) {
			const result = await tagInstance.update({ ...req.body.tagInstance });
			//tagInstance.tagId = 2;
			//const saveRes = await tagInstance.save();
			res.json({ tagInstance });
		} else {
			const err = new Error();
			err.title = 'TagInstance Not Found';
			err.status = 404;
			next(err);
		}
	})
);

//DELETE /businesses/reviews/tags/:id - deletes a given tag instance for specified business
//**Functioning 4.22.20 */
router.delete(
	'/reviews/tags', //do we need tagInstance id; will front-end have this info???:id',
	//requireAuth
	asyncHandler(async (req, res) => {
		//assumes userId, businessId and reviewId passed in request
		const { userId, businessId, reviewId, tag } = req.body;
		const tagType = await Tag.findOne({ where: { type: tag } });
		console.log('tagType: ', tagType);
		if (tagType) {
			const tagInstance = await TagInstance.findOne({
				where: {
					reviewId,
					businessId,
					userId,
					tagId: tagType.id
					//$and: [{ businessId }, { userId }],
					// $and: { userId }
				}
			});
			if (tagInstance) {
				await tagInstance.destroy();
				res.json({ deleted: true });
			} else {
				//no tag instance to delete
				const err = new Error();
				err.title = 'TagInstance Not Found';
				err.status = 404;
				next(err);
			}
		} else {
			//no tag type to delete
			const err = new Error();
			err.title = 'Tag type Not Found';
			err.status = 404;
			next(err);
		}
	})
);

//deletes a tag type from Tag table (no longer searchable)
//functioning 4.22.20
router.delete(
	'/tags/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const tag = await Tag.findByPk(req.params.id);
		if (tag) {
			await tag.destroy();
			res.json({ deleted: true });
		} else {
			//no tag type to delete
			const err = new Error();
			err.title = 'Tag type Not Found';
			err.status = 404;
			next(err);
		}
	})
);

module.exports = router;
