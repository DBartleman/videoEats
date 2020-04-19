'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    firstName: { type: DataTypes.STRING(35), allowNull: false },
    lastName: { type: DataTypes.STRING(40), allowNull: false },
    email: { type: DataTypes.STRING(35), allowNull: false, unique: true },
    hashedPass: { type: DataTypes.STRING(255), allowNull: false },
    revScore: { type: DataTypes.INTEGER, allowNull: false },
    statusTypeId: { type: DataTypes.INTEGER, allowNull: false, }
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.StatusType, { foreignKey: 'statusTypeId' });
    User.hasMany(models.Business, { foreignKey: 'ownerId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.belongsToMany(models.VoteInstance, { foreignKey: 'userId' });
    User.belongsToMany(models.TagInstance, { foreignKey: 'userId' });
  };
  return User;
};