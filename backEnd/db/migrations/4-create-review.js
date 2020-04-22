'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Businesses',
          key: 'id'
        }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ReviewTypes',
          key: 'id'
        }
      },
      upVoteCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      downVoteCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      videoLink: {
        type: Sequelize.STRING(100)
      },
      reviewText: {
        type: Sequelize.TEXT
      },
      businessRating: {
        allowNull: false,
        type: Sequelize.STRING(3)
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
    return queryInterface.dropTable('Reviews');
  }
};