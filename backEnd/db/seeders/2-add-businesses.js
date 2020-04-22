'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Businesses',
			[
				// hours stored in businesses??
				/* 1 */{
					name: 'Marufuku Ramen SF', address: '1581 Webster St, Ste 235, San Francisco, CA 94115', createdAt: new Date(), updatedAt: new Date() },
				/* 2 */{
					name: 'Ramen Yamadaya', address: '1728 Buchanan St San Francisco, CA 94115', createdAt: new Date(), updatedAt: new Date() },
				/* 3 */{
					name: 'The House', address: '1230 Grant Ave, San Francisco, CA 94133', createdAt: new Date(), updatedAt: new Date() },
				/* 4 */{
					name: 'Burma Superstar', address: '309 Clement St, San Francisco, CA 94118', createdAt: new Date(), updatedAt: new Date() },
				/* 5 */{
					name: 'San Tung', address: '1031 Irving St, San Francisco, CA 94122', createdAt: new Date(), updatedAt: new Date() },
				/* 6 */{
					name: 'Hog Island Oyster Co', address: '1 Ferry Bldg, Shop 11, San Francisco, CA 94111', createdAt: new Date(), updatedAt: new Date() },
				/* 7 */{
					name: 'Gary Danko', address: '800 N Point St, San Francisco, CA 94109', createdAt: new Date(), updatedAt: new Date() },
				/* 8 */{
					name: 'Sushirrito', address: '226 Kearny St, San Francisco, CA 94108', createdAt: new Date(), updatedAt: new Date() },
				/* 9 */{
					name: 'The Bird', address: '115 New Montgomery St, San Francisco, CA 94105', createdAt: new Date(), updatedAt: new Date() },
				/* 10 */{
					name: 'Woodhouse Fish Company', address: '1914 Fillmore St, San Francisco, CA 94115', createdAt: new Date(), updatedAt: new Date() },
				/* 11 */{
					name: 'La Mar Cebichería Peruana', address: 'Pier 1 1/2 The Embarcadero, Ste 100, San Francisco, CA 94111', createdAt: new Date(), updatedAt: new Date() },
				/* 12 */{
					name: 'Brenda\'s French Soul Food', address: '652 Polk St, San Francisco, CA 94102', createdAt: new Date(), updatedAt: new Date() },
				/* 13 */{
					name: 'El Farolito', address: '2779 Mission St, San Francisco, CA 94110', createdAt: new Date(), updatedAt: new Date() }
				//* 1 */{ name: '', address: '', createdAt: new Date(), updatedAt: new Date() },
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Businesses', null, {});
	}
};
