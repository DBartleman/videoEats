'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(35)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(35)
      },
      hashedPass: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      revScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      statusTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "StatusTypes",
          key: "id",
        },
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
    return queryInterface.dropTable('Users');
  }
};