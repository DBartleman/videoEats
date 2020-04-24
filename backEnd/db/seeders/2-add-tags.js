'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { type: 'Pizza', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ramen', createdAt: new Date(), updatedAt: new Date() },
      { type: 'American Grill', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Japanese', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Chinese', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Korean', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Chicken Wings', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Sushi', createdAt: new Date(), updatedAt: new Date() },
      { type: 'French', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Wine Bar', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Sandwiches', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Latin American', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Mexican', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Brunch', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Cajun', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Seafood', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
