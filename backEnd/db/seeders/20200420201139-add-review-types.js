'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'ReviewTypes',
			[
				{ type: 'Video', createdAt: new Date(), updatedAt: new Date() },
				{ type: 'Text', createdAt: new Date(), updatedAt: new Date() },
				{ type: 'Mixed', createdAt: new Date(), updatedAt: new Date() }
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('ReviewTypes', null, {});
	}
};
