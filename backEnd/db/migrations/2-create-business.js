'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      phoneNum: {
        type: Sequelize.STRING(15)
      },
      hours: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.TEXT
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};
