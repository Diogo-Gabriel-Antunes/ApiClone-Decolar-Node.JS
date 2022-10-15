"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MinhasViagens extends Model {
    static associate(models) {
      models.minhasViagens.belongsTo(models.viagens, {
        foreignKey: "viagensId",
        as: "viagens",
      });
      models.minhasViagens.belongsTo(models.aluguelCarros, {
        foreignKey: "alugueisCarrosId",
        as: "aluguelCarros",
      });
      models.minhasViagens.belongsTo(models.AlugueisCasa, {
        foreignKey: "alugueisCasaId",
        as: "alugueisCasa",
      });
      models.minhasViagens.belongsTo(models.OpcoesAtracoes, {
        foreignKey: "opcaoId",
        as: "atracao",
      });
      models.minhasViagens.belongsTo(models.hospedagens, {
        foreignKey: "hospedagemId",
        as: "hospedagem",
      });
    }
  }
  MinhasViagens.init(
    {
      alugueisCarrosId: DataTypes.INTEGER,
      alugueisCasaId: DataTypes.INTEGER,
      opcaoId: DataTypes.INTEGER,
      hospedagemId: DataTypes.INTEGER,
      viagensId: DataTypes.INTEGER,
      usuarioId: DataTypes.INTEGER,
      dataInicio: DataTypes.DATEONLY,
      dataFinal: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "minhasViagens",
    }
  );
  return MinhasViagens;
};
