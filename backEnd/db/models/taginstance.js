'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagInstance = sequelize.define('TagInstance', {
    businessId: { type: DataTypes.INTEGER, allowNull: false },
    tagId: { type: DataTypes.INTEGER, allowNull: false },
    reviewId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  TagInstance.associate = function (models) {
    // TagInstance.belongsTo(models.Tag, {
    //   foreignKey: 'tagId'
    // });
    // TagInstance.belongsTo(models.Review, { foreignKey: 'reviewId' });
    // TagInstance.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return TagInstance;
};