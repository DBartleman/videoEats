const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../utils/utils');
const { Business, Review, Tag, TagInstance, User, VoteInstance } = require('../db/models');
const { requireAuth } = require('../utils/auth.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

//TODO: multi-roles; user/owner

// business routes

//create a new business entity for the database **Functioning 4.20.20**
router.post(
	'/',
	requireAuth,
	asyncHandler(async (req, res) => {
		const business = await Business.create({ ...req.body });
		res.status(201).json({
			business: {
				id: business.id,
				name: business.name
			}
		});
	})
);

//returns all businesses in the database

//default return (limit of X?) businesses, ordered by rating
//allow for search options
//Name
//Tag
//Location

//search route
router.post(
	'/search',
	asyncHandler(async (req, res) => {
		const { name, tagBasic, tagMulti, loc } = req.body;
		let businesses;

		if (name) {
			businesses = await Business.findAll({
				where: { name: { [Op.iLike]: `%${name.toLowerCase()}%` } },
				attributes: [ 'id', 'name', 'address', 'phoneNum', 'hours' ],
				include: {
					model: Review,
					attributes: [ 'businessRating' ]
				}
			});
			//one tag (category) per business model
		} else if (tagBasic) {
			businesses = await Business.findAll({
				include: [
					{
						model: Tag,
						attributes: [ 'id', 'type' ],
						where: { type: tagBasic }
					},
					{
						model: Review,
						attributes: [ 'businessRating' ]
					}
				]
			});
		} else if (tag - multi) {
			//stretch - track multi-tag instances and return businesses that have search term as one of 3 most frequent tags
			//store and search by GPS???
		} else {
			const err = new Error();
			err.title = 'Invalid search Term';
			err.status = 400;
			next(err);
		}
		res.json({ businesses });
	})
);

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const businesses = await Business.findAll({
			attributes: [ 'id', 'name', 'address', 'phoneNum', 'hours' ] //verify this list of attributes
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
	requireAuth,
	asyncHandler(async (req, res, next) => {
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
	//requireAuth, removed for postman testing. Add specific auth for admin functions?
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
//pass tag options in req.body
router.post(
	'/:id(\\d+)/reviews',
	requireAuth,
	asyncHandler(async (req, res) => {
		//const business = await Business.findByPk(req.params.id); unnecessary?
		const review = await Review.create({ ...req.body.review }); //assumes req body contains 'review' key with corresponding value of an object containing required parameters to construct a new review
		//grab tags
		const { tags, user } = req.body;
		//loop through tags and create associated TagInstances
		// for (let tag of tags) {
		// 	const tagInstance = await TagInstance.create({
		// 		reviewId: review.id,
		// 		userId: user.id,
		// 		typeId: tag.type
		// 	});
		// }
		res.status(201).json({ review });
	})
);

//get all reviews for specified business
//**functioning 4.20.20**
router.get(
	'/:id(\\d+)/reviews',
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
					model: User,
					attributes: [ 'id', 'userName' ]
				},
				{
					model: TagInstance,
					attributes: [ 'typeId' ] //include Tag model to get type name?
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
	requireAuth,
	asyncHandler(async (req, res, next) => {
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
	requireAuth,
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
			where: { businessId: req.params.id },
			attributes: [ 'tagId', [ sequelize.literal('(SELECT COUNT (*))') ] ]
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
	asyncHandler(async (req, res, next) => {
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
	asyncHandler(async (req, res, next) => {
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

//************************************************ Vote-Based Routes ******************/

//* POST /businesses/reviews/:id/votes - creates a new vote instance
//**Functioning 4.23.20 ......TO-DO: add unique indexes to join tables */
router.post(
	'/reviews/:id(\\d+)/votes',
	//requireAuth - removed for testing with postman
	asyncHandler(async (req, res) => {
		const { user, vote } = req.body;
		const newVote = await VoteInstance.create({
			typeId: vote.typeId,
			userId: user.id,
			reviewId: req.params.id
		});
		res.json({ newVote });
	})
);

//* GET /businesses/reviews/:id/votes - returns up/down counts for specified review (Is there a reason we need actual VoteInstance objects?)
//**Functioning 4.23.20 */
router.get(
	'/reviews/:id(\\d+)/votes',
	asyncHandler(async (req, res) => {
		const upCount = await VoteInstance.findAndCountAll({
			where: {
				reviewId: req.params.id,
				typeId: 1
			},
			attributes: []
		});
		const downCount = await VoteInstance.findAndCountAll({
			where: {
				reviewId: req.params.id,
				typeId: 2
			},
			attributes: []
		});
		res.json({
			upCount: upCount.count,
			downCount: downCount.count
		});
	})
);

//* PUT /businesses/reviews/votes/:id - updates a specific vote instance for related review
//**Functioning 4.23.20 */
router.put(
	'/reviews/:id(\\d+)/votes/',
	//requireAuth
	asyncHandler(async (req, res, next) => {
		const { user: { id }, vote: { typeId } } = req.body;
		const voteInstance = await VoteInstance.findOne({
			where: {
				reviewId: req.params.id,
				userId: id
				//$and: [{ businessId }, { userId }],
				// $and: { userId }
			}
		});
		if (voteInstance) {
			const result = await voteInstance.update({ typeId });
			//voteInstance.voteId = 2;
			//const saveRes = await voteInstance.save();
			res.json({
				update: true,
				newType: result.typeId
			});
		} else {
			const err = new Error();
			err.title = 'VoteInstance Not Found';
			err.status = 404;
			next(err);
		}
	})
);

//delete voteInstance for specified review and passed-in user
//**Functioning 4.23.20 */
router.delete(
	'/reviews/:id(\\d+)/votes',
	//requireAuthh)
	asyncHandler(async (req, res, next) => {
		const { user: { id } } = req.body;
		const voteInstance = await VoteInstance.findOne({
			where: {
				userId: id,
				reviewId: req.params.id
			}
		});
		if (voteInstance) {
			console.log('voteInst', voteInstance);
			await voteInstance.destroy();
			//voteInstance.voteId = 2;
			//const saveRes = await voteInstance.save();
			res.json({ deleted: true });
		} else {
			const err = new Error();
			err.title = 'Vote Instance Not Found';
			err.status = 404;
			next(err);
		}
	})
);
module.exports = router;
