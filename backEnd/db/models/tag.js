'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: { type: DataTypes.STRING(30), allowNull: false, unique: true }
  }, {});
  //step through these associations and find the association blocking tagId update
  Tag.associate = function (models) {
    Tag.hasMany(models.Business, { foreignKey: 'categoryId' });
    // Tag.belongsToMany(models.Review, {
    //   through: models.TagInstance,
    //   foreignKey: 'tagId',
    //   otherKey: 'reviewId'
    // });
  };
  return Tag;
};
