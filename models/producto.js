'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class producto extends Model { }

producto.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    code:{
      type:DataTypes.STRING,
      allowNull:false
    },
    name:{
      type: DataTypes.STRING,
      allowNull:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    price:{
      type: DataTypes.DOUBLE,
      allowNull:false
    },
    category:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'categoria',
        key:'id'
      }
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    longDescription:{
      type:DataTypes.STRING,
      allowNull:false
    },
    status:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    }

  },{
    sequelize,
    modelName: 'producto',
  });

  return producto;
};