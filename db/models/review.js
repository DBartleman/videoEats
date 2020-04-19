'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    businessId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    typeId: { type: DataTypes.INTEGER, allowNull: false },
    upVoteCount: { type: DataTypes.INTEGER, allowNull: false },
    downVoteCount: { type: DataTypes.INTEGER, allowNull: false },
    videoLink: DataTypes.STRING,
    reviewText: DataTypes.TEXT
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.Business, { foreignKey: 'businessId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.ReviewType, { foreignKey: 'typeId' });
    Review.belongsToMany(models.VoteInstance, { foreignKey: 'reviewId' });
    Review.belongsToMany(models.TagInstance, { foreignKey: 'reviewId' });
  };
  return Review;
};