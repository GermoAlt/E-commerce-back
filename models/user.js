'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class user extends Model { }

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
      allowNull:true
    },
    tipo:{
      type: DataTypes.STRING,
      allowNull:false
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull:true
    },
    apellido:{
      type:DataTypes.STRING,
      allowNull:true
    },
    du:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    domicilio:{
      type:DataTypes.STRING,
      allowNull:true
    },
    telefono:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    status:{
      type:DataTypes.CHAR,
      allowNull:false
    }

  },{
    sequelize,
    modelName: 'user',
  });

  return user;
};