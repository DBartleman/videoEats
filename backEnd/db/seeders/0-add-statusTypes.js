'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'StatusTypes',
			[
				{ type: 'Silver', createdAt: new Date(), updatedAt: new Date() },
				{ type: 'Gold', createdAt: new Date(), updatedAt: new Date() },
				{ type: 'Platinum', createdAt: new Date(), updatedAt: new Date() }
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('StatusTypes', null, {});
	}
};
