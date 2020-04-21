'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [
      { name: 'Pizza Hut', address: 'add1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fredo\'s Hot Pies', address: 'add2', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Businesses', null, {});
  }
};
