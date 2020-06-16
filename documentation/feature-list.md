# Features List

## MVP
* Business Page
  * Business Name
  * Location (street address)
  * Hours
  * Overall ratings
  * Reviews section
* Search / Filters
  * Search by name
  * Search by type of food
  * Filter by radius
    * query all business in the backend and render into frontend
* Reviews
  * Video reviews
    * Videos are hosted on Youtube and embedded into review
      * App initially relies on outside hosting, users upload elsewhere and link on review
  * Text reviews
  * review's score
  * Reviews can be text-only, video-only, or have both
* Business rating
  * Average rating of 1-5 stars
* Map
  * Uses Google Maps API
  * Searches for businesses within radius of user or location
  * Businesses are stored in database with address / cooridinates
  * "Place mode" of google api to put pins down for us
* User
  * Creation
  * login (demo login and real login) / auth / route-role cohesion
  * Three types of users: Business Admins, Customers and Guests (default, not logged in)
    * Business Admins create and manange business pages and do not leave reviews
    * Customers leave reviews for businesses, and can identify a new business
    * Guests do not leave reviews, but can still use map and search functionality
* Link/presentation to all reviews of user
* Link/presentation to all reviews for business


## Future direction for features:
* Business User authorization
* Upvote / downvote
* Mark reviews funny, cool, useful, etc 
* Flag reviews for being taken down (offensive material, scams, fraud, spam)
* Profile
* Friends
* Business homepage customization
* Business or review showcase
* Recommendation algo
* Advanced map features
* Google Maps direction mode to get directions to location
* Better data analysis for reviews
* Alternate rating system: five categories that a restaurant passes or doesn't pass
