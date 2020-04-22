# Back-End Routes

## **Businesses**

* POST /businesses/ - creates a new business object ***-- functioning 4.20.20***
* GET /businesses - returns all businesses in database ***-- functioning 4.20.20***
* GET /businesses/:id - returns a given business ***-- functioning 4.20.20***
* PUT /businesses/:id - updates a given business ***-- functioning 4.20.20***
* DELETE /businesses/:id - deletes a given business ***-- functioning 4.20.20***
 
## **Reviews**
 
* POST /businesses/:biz_id/reviews/ - creates a new review ***-- functioning 4.20.20***
* GET /businesses/:id/reviews - returns all reviews for a given business ***-- functioning 4.20.20***
* GET /businesses/:biz_id/reviews/:id - returns a given review ***-- functioning 4.21.20***
* PUT /businesses/:biz_id/reviews/:id - updates a given review ***-- functioning 4.21.20***
* DELETE /businesses/:biz_id/reviews/:id - deletes a given review ***-- functioning 4.21.20***
 
## **Tags**
 
* POST /businesses/:biz_id/reviews/:id/tags - creates a new tag object and attaches it to specified review ***-- functioning 4.22.20***
* GET /businesses/tags - returns all existing tag options ***-- functioning 4.21.20***
* GET /businesses/:biz_id/tags/ - returns all tags for specified business ***-- functioning 4.21.20*** (change to top 'x' tags?)
* PUT /businesses/:biz_id/tags/:id - updates a given tag instance ***-- functioning 4.22.20***
* DELETE /businesses/reviews/tags/:id - deletes a given tag instance for specified business ***-- functioning 4.22.20***
 
## **Users**
 
* POST /users/ - creates new user ***-- functioning 4.18.20***
* GET /users/:id - returns a given user ***-- functioning 4.18.20***
* PUT /users/:id - updates a given user ***-- functioning 4.18.20***
* DELETE /users/:id - deletes a given user ***-- functioning 4.18.20***
* POST /users/token - gets JWT auth token for user ***-- functioning 4.20.20***
* GET /users/:id/reviews - returns all reviews for a given user ***-- functioning 4.21.20***