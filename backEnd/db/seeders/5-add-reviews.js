'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { businessId: '1', userId: '1', typeId: '2', upVoteCount: '0', downVoteCount: '0', reviewText: 'Fue muy rica!', businessRating: 4.5, createdAt: new Date(), updatedAt: new Date() },
      { businessId: '2', userId: '1', typeId: '2', upVoteCount: '0', downVoteCount: '0', reviewText: 'So good!', businessRating: 4.5, createdAt: new Date(), updatedAt: new Date() },
      { businessId: '2', userId: '2', typeId: '2', upVoteCount: '0', downVoteCount: '0', reviewText: 'I\'VE HAD BETTER!', businessRating: 4.0, createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
