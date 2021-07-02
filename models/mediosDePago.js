'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class mediosDePago extends Model { }

mediosDePago.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    numero:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull:false
    },
    tipo:{
      type: DataTypes.STRING,
      allowNull:false
    },
    vencimiento:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }

  },{
    sequelize,
    modelName: 'mediosDePago',
  });

  return mediosDePago;
};