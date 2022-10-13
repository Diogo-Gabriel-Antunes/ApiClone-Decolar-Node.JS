"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuartosAlugueisCasas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuartosAlugueisCasas.init(
    {
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING,
      hidromassagem: DataTypes.BOOLEAN,
      tv: DataTypes.BOOLEAN,
      wifi: DataTypes.BOOLEAN,
      arCondicionado: DataTypes.BOOLEAN,
      frigobar: DataTypes.BOOLEAN,
      quartoAlugueisCasaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "QuartosAlugueisCasas",
    }
  );
  return QuartosAlugueisCasas;
};
