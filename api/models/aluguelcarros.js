"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class aluguelCarros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aluguelCarros.init(
    {
      nome: DataTypes.STRING,
      espaco: DataTypes.INTEGER,
      arcondicionado: DataTypes.BOOLEAN,
      kmrodados: DataTypes.INTEGER,
      precoPorDia: DataTypes.FLOAT,
      seguro: DataTypes.BOOLEAN,
      cambio: DataTypes.STRING,
      fotoDoCarro: DataTypes.STRING,
      locadora: DataTypes.STRING,
      localDeRetirada: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "aluguelCarros",
    }
  );
  return aluguelCarros;
};
