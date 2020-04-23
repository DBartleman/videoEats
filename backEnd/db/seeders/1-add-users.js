'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{ userName: 'demoUser', firstName: 'Demo', lastName: 'User', email: 'demo@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test', firstName: 'Testin1', lastName: 'Stuff', email: 'test1@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test2', firstName: 'Testin2', lastName: 'User', email: 'test2@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test3', firstName: 'Testin3', lastName: 'Stuff', email: 'test3@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test4', firstName: 'Testin4', lastName: 'User', email: 'test4@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test5', firstName: 'Testin5', lastName: 'Stuff', email: 'test5@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test6', firstName: 'Testin6', lastName: 'User', email: 'test6@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test7', firstName: 'Testin7', lastName: 'Stuff', email: 'test7@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test8', firstName: 'Testin8', lastName: 'User', email: 'test8@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
			{ userName: 'test9', firstName: 'Testin9', lastName: 'Stuff', email: 'test9@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
