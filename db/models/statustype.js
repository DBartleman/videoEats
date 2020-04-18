'use strict';
module.exports = (sequelize, DataTypes) => {
  const StatusType = sequelize.define('StatusType', {
    type: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    }
  }, {});
  StatusType.associate = function (models) {
    StatusType.hasMany(models.User, { foreignKey: 'statusTypeId' });
  };
  return StatusType;
};