'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class transaccion extends Model { }

transaccion.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    idTransaction:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    total:{
      type: DataTypes.DOUBLE,
      allowNull:false
    },
    date:{
      type: DataTypes.DATE,
      allowNull:false
    },
    productoComprado:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'productos',
        key:'id'
      }
    }

  },{
    sequelize,
    modelName: 'transaccion',
  });

  return transaccion;
};