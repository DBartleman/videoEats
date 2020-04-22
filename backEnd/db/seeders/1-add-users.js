'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{ userName: 'demoUser', firstName: 'Demo', lastName: 'User', email: 'demo@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test2', firstName: 'Testin', lastName: 'Stuff', email: 'test2@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
