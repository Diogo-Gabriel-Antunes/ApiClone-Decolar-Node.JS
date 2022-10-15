"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OpcoesAtracoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.OpcoesAtracoes.hasMany(models.minhasViagens, {
        foreignKey: "opcaoId",
        as: "atracao",
      });
    }
  }
  OpcoesAtracoes.init(
    {
      qtdDias: DataTypes.INTEGER,
      Duracao: DataTypes.STRING,
      nome: DataTypes.STRING,
      disponibilidade: DataTypes.STRING,
      preco: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "OpcoesAtracoes",
    }
  );
  return OpcoesAtracoes;
};
