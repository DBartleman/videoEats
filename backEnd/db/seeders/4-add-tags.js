'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { type: 'Pizza', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ramen', createdAt: new Date(), updatedAt: new Date() },
      { type: 'American Grill', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
