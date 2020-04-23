'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    firstName: { type: DataTypes.STRING(35), allowNull: false },
    lastName: { type: DataTypes.STRING(40), allowNull: false },
    email: { type: DataTypes.STRING(35), allowNull: false, unique: true },
    hashedPass: { type: DataTypes.STRING.BINARY, allowNull: false },
    revScore: { type: DataTypes.INTEGER, allowNull: false },
    statusTypeId: { type: DataTypes.INTEGER, allowNull: false, }
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.StatusType, { foreignKey: 'statusTypeId' });
    User.hasMany(models.Business, { foreignKey: 'ownerId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
    // User.belongsToMany(models.VoteType, {
    //   through: models.VoteInstance,
    //   foreignKey: 'userId',
    //   otherKey: 'typeId'
    // });
    // User.belongsToMany(models.Tag, {
    //   through: models.TagInstance,
    //   foreignKey: 'userId',
    //   otherKey: 'tagId'
    // });
  };

  //instance methods
  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPass.toString());
  };

  return User;
};
