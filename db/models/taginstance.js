'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagInstance = sequelize.define('TagInstance', {
    tagId: { type: DataTypes.INTEGER, allowNull: false },
    reviewId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  TagInstance.associate = function (models) {
    TagInstance.belongsToMany(models.Tag, { foreignKey: 'tagId' });
    TagInstance.belongsToMany(models.Review, { foreignKey: 'reviewId' });
    TagInstance.belongsToMany(models.User, { foreignKey: 'userId' });
  };
  return TagInstance;
};