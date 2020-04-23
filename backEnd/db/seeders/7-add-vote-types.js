'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VoteTypes',
      [
        { type: 'Up', createdAt: new Date(), updatedAt: new Date() },
        { type: 'Down', createdAt: new Date(), updatedAt: new Date() }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VoteTypes', null, {});
  }
};
