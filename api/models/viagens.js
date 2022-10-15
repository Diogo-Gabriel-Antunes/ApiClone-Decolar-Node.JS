"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class viagens extends Model {
    static associate(models) {
      models.viagens.hasMany(models.imagensViagens, {
        foreignKey: "viagensId",
        as: "imagens",
      });
      models.viagens.hasMany(models.minhasViagens, {
        foreignKey: "viagensId",
        as: "viagens",
      });
    }
  }
  viagens.init(
    {
      companhia: DataTypes.STRING,
      destino: DataTypes.STRING,
      data: DataTypes.DATEONLY,
      preco: DataTypes.FLOAT,
      imagemCompanhia: DataTypes.STRING,
      origem: DataTypes.STRING,
      volta: DataTypes.BOOLEAN,

      dataVolta: DataTypes.DATEONLY,
      HorarioDaIda: DataTypes.STRING,
      HorarioDaVolta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "viagens",
    }
  );
  return viagens;
};
