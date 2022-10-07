"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AlugueisCasa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AlugueisCasa.init(
    {
      nome: DataTypes.STRING,
      distanciadocentro: DataTypes.FLOAT,
      avaliacao: DataTypes.FLOAT,
      sobre: DataTypes.TEXT,
      preco: DataTypes.FLOAT,
      imagem: DataTypes.STRING,
      destino: DataTypes.STRING,
      disponivelParaAlocacao: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "AlugueisCasa",
    }
  );
  return AlugueisCasa;
};
