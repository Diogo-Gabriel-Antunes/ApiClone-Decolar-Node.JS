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
      models.AlugueisCasa.hasMany(models.imagensAlugueisCasa, {
        foreignKey: "alugueisCasaId",
        as: "imagens",
      });
      models.AlugueisCasa.hasMany(models.QuartosAlugueisCasas, {
        foreignKey: "quartoAlugueisCasaId",
        as: "quartos",
      });
      models.AlugueisCasa.hasMany(models.minhasViagens, {
        foreignKey: "viagensId",
        as: "viagens",
      });
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
