'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: { type: DataTypes.STRING(100), allowNull: false },
    address: { type: DataTypes.STRING(150), allowNull: false },
    phoneNum: DataTypes.STRING(15),
    hours: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    ownerId: DataTypes.INTEGER
  }, {});
  Business.associate = function (models) {
    Business.belongsTo(models.User, { foreignKey: 'ownerId' });
    Business.hasMany(models.Review, { foreignKey: 'businessId' });
  };
  return Business;
};