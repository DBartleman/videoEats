'use strict';

module.exports = {
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
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test',
					firstName: 'Joseph',
					lastName: 'Dentler',
					email: 'test1@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test2',
					firstName: 'Lorena',
					lastName: 'Crumb',
					email: 'test2@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test3',
					firstName: 'Eddie',
					lastName: 'Vert',
					email: 'test3@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test4',
					firstName: 'Kyung',
					lastName: 'Jensen',
					email: 'test4@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test5',
					firstName: 'Spencer',
					lastName: 'Wild',
					email: 'test5@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test6',
					firstName: 'Pam',
					lastName: 'Ervin',
					email: 'test6@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test7',
					firstName: 'Miguel',
					lastName: 'Gagliano',
					email: 'test7@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test8',
					firstName: 'Denae',
					lastName: 'Howser',
					email: 'test8@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					userName: 'test9',
					firstName: 'Harris',
					lastName: 'Bordeaux',
					email: 'test9@gmail.com',
					hashedPass: 'pass',
					revScore: '0',
					statusTypeId: '2',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
