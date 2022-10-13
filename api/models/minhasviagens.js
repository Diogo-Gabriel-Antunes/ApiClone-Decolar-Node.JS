"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MinhasViagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  MinhasViagens.init(
    {
      dataInicio: DataTypes.DATEONLY,
      dataFinal: DataTypes.DATEONLY,
      alugueisCasaId: DataTypes.INTEGER,
      alugueisCarrosId: DataTypes.INTEGER,
      atracaoId: DataTypes.INTEGER,
      hospedagemId: DataTypes.INTEGER,
      viagensId: DataTypes.INTEGER,
      usuarioId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "minhasViagens",
    }
  );
  return MinhasViagens;
};
