'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: { type: DataTypes.STRING(30), allowNull: false, unique: true }
  }, {});
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Review, {
      through: models.TagInstance,
      foreignKey: 'tagId',
      otherKey: 'reviewId'
    });
  };
  return Tag;
};