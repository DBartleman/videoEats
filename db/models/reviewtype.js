'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewType = sequelize.define('ReviewType', {
    type: { type: DataTypes.STRING(30), allowNull: false, unique: true }
  }, {});
  ReviewType.associate = function (models) {
    ReviewType.hasMany(models.Review, { foreignKey: 'typeId' });
  };
  return ReviewType;
};