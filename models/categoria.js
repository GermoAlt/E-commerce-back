'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class categoria extends Model { }

categoria.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    sequelize,
    modelName: 'categoria',
  });

  return categoria;
};