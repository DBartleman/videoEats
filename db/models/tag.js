'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: { type: DataTypes.STRING(30), allowNull: false, unique: true }
  }, {});
  Tag.associate = function (models) {
    Tag.belongsToMany(models.TagInstance, { foreignKey: 'tagId' });
  };
  return Tag;
};