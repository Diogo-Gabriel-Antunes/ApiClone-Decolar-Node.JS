'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class viagens extends Model {
   
    static associate(models) {
      
    }
  }
  viagens.init({
    companhia: DataTypes.STRING,
    destino: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    preco: DataTypes.FLOAT,
    imagemCompanhia:DataTypes.STRING,
    origem: DataTypes.STRING,
    volta:DataTypes.BOOLEAN,
    cidadeDaVolta:DataTypes.STRING,
    dataVolta:DataTypes.DATEONLY,
    HorarioDaIda:DataTypes.STRING,
    HorarioDaVolta:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'viagens',
  });
  return viagens;
};