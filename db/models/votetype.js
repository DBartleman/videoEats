'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('VoteType', {
    type: { type: DataTypes.STRING(15), allowNull: false, unique: true },
  }, {});
  VoteType.associate = function (models) {
    VoteType.belongsToMany(models.VoteInstance, { foreignKey: 'typeId' });
  };
  return Vote;
};