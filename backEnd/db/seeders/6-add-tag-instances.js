'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TagInstances', [
      { businessId: 1, tagId: 1, reviewId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { businessId: 2, tagId: 1, reviewId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { businessId: 2, tagId: 3, reviewId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { businessId: 2, tagId: 2, reviewId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TagInstances', null, {});
  }
};
