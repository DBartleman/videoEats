'use strict';

module.exports = {
<<<<<<< HEAD:backEnd/db/seeders/1-add-users.js
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: 'demoUser', firstName: 'Demo', lastName: 'User', email: 'demo@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
      { userName: 'test2', firstName: 'Testin', lastName: 'Stuff', email: 'test2@gmail.com', hashedPass: 'pass', revScore: '0', statusTypeId: '2', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
=======
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					userName: 'demoUser',
					firstName: 'Demo',
					lastName: 'User',
					email: 'demo@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '1',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test2',
					firstName: 'Testin',
					lastName: 'Stuff',
					email: 'test2@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '1',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
>>>>>>> master:backEnd/db/seeders/20200420202439-add-users.js

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
