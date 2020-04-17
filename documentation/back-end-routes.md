# Back-End Routes

**##Businesses**

* POST /businesses/ - creates a new business object
* GET /businesses/:id/reviews - returns all reviews for a given business
* GET /businesses/:id - returns a given business
* UPDATE /businesses/:id - updates a given business
* DELETE /businesses/:id - deletes a given business
 
**##Reviews**
 
* POST /reviews/ - creates a new review
* GET /reviews/:id - returns a given review
* UPDATE /reviews/:id - updates a given review
* DELETE /reviews/:id - deletes a given review
 
**##CategoryTypes**
 
* GET /categoryTypes/ - returns all category type options
 
**##Users**
 
* POST /users/ - creates new user
* GET /users/:id/reviews - returns all reviews for a given user
* GET /users/:id - returns a given user
* UPDATE /users/:id - updates a given user
* DELETE /users/:id - deletes a given user
* GET /users/token - gets JWT auth token for user

**##Owners (stretch)**

* POST /owners/ - creates new owner
* GET /owners/:id/reviews - returns all reviews for a given owner
* GET /owners/:id - returns a given owner
* UPDATE /owners/:id - updates a given owner
* DELETE /owners/:id - deletes a given owner