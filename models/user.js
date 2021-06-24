'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    username:{
      type:DataTypes.STRING,
      allowNull:true
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    checkout: {
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    foto:{
      type: DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};