"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hospedagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.hospedagens.hasMany(models.imagensHospedagem, {
        foreignKey: "hospedagemId",
        as: "imagens",
      });
      models.hospedagens.hasMany(models.quartosHospedagems, {
        foreignKey: "quartosHospedagemId",
        as: "quartos",
      });
    }
  }
  hospedagens.init(
    {
      nome: DataTypes.STRING,
      tipo: DataTypes.STRING,
      distanciadocentro: DataTypes.FLOAT,
      avaliacao: DataTypes.NUMBER,
      preco: DataTypes.FLOAT,
      sobre: DataTypes.TEXT,
      imagem: DataTypes.STRING,
      localizacao: DataTypes.STRING,
      comentarios: DataTypes.NUMBER,
      dataRef: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "hospedagens",
    }
  );
  return hospedagens;
};
