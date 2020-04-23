'use strict';
module.exports = (sequelize, DataTypes) => {
  const VoteType = sequelize.define('VoteType', {
    type: { type: DataTypes.STRING(15), allowNull: false, unique: true },
  }, {});
  VoteType.associate = function (models) {
    //   VoteType.belongsToMany(models.User, {
    //     through: models.VoteInstance,
    //     foreignKey: 'typeId',
    //     otherKey: 'userId'
    //   });
    //   VoteType.belongsToMany(models.Review, {
    //     through: models.VoteInstance,
    //     foreignKey: 'typeId',
    //     otherKey: 'reviewId'
    //   });
  };
  return VoteType;
};