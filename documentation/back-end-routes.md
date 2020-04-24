# Back-End Routes

## **Businesses**

* POST /businesses/ - creates a new business object ***-- functioning 4.20.20***
* GET /businesses - returns all businesses in database ***-- functioning 4.20.20*** (add search parameters to req.body)
* GET /businesses/:id - returns a given business ***-- functioning 4.20.20***
* PUT /businesses/:id - updates a given business ***-- functioning 4.20.20***
* DELETE /businesses/:id - deletes a given business ***-- functioning 4.20.20***

## **Reviews**

* POST /businesses/:id/reviews/ - creates a new review ***-- functioning 4.20.20*** (add tags to req.body)
* GET /businesses/:id/reviews - returns all reviews for a given business ***-- functioning 4.20.20***
* GET /businesses/reviews/:id - returns a given review ***-- functioning 4.21.20***
* PUT /businesses/reviews/:id - updates a given review ***-- functioning 4.21.20*** (add any tag updates to req.body)
* DELETE /businesses/reviews/:id - deletes a given review ***-- functioning 4.21.20***

## **Tags**

* POST /businesses/:biz_id/reviews/:id/tags - creates a new tag object and attaches it to specified review ***-- functioning 4.22.20*** (move this functionality under review endpoints)
* GET /businesses/tags - returns all existing tag options ***-- functioning 4.21.20***
* GET /businesses/:biz_id/tags/ - returns all tags for specified business ***-- functioning 4.21.20*** (change to top 3 tags)
* PUT /businesses/:biz_id/tags/:id - updates a given tag instance ***-- functioning 4.22.20*** (move this functionality under review endpoints)
* DELETE /businesses/reviews/tags/ - deletes a given tag instance for specified business (tag value specified in req.body) ***-- functioning 4.22.20*** (should this functionality be moved???)

* DELETE /businesses/tags/ - deletes a given tag type for all businesses (no longer searchable) ***-- functioning 4.22.20***

## **Users**

* POST /users/ - creates new user ***-- functioning 4.18.20***
* GET /users/:id - returns a given user ***-- functioning 4.18.20***
* PUT /users/:id - updates a given user ***-- functioning 4.18.20***
* DELETE /users/:id - deletes a given user ***-- functioning 4.18.20***
* POST /users/token - gets JWT auth token for user ***-- functioning 4.20.20***
* GET /users/:id/reviews - returns all reviews for a given user ***-- functioning 4.21.20***

## **Votes**

* POST /businesses/reviews/:id/votes - creates a new vote instance ***-- functioning 4.23.20***
* GET /businesses/reviews/:id/votes - returns up/down counts for specified review (Is there a reason we need actual VoteInstance objects?) ***-- functioning 4.23.20***
* PUT /businesses/reviews/votes/:id - updates a specific vote instance for related review
* DELETE /businesses/reviews/votes/:id - deletes specific vote instance
