'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPass: DataTypes.STRING,
    revScore: DataTypes.INTEGER,
    statusTypeId: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.StatusType, { foreignKey: 'statusTypeId' });
  };
  return User;
};