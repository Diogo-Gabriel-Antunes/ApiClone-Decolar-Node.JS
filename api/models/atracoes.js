"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class atracoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.atracoes.hasMany(models.imagensAtracoes, {
        foreignKey: "atracaoId",
        as: "imagens",
      });
    }
  }
  atracoes.init(
    {
      imagem: DataTypes.STRING,
      nome: DataTypes.STRING,
      local: DataTypes.STRING,
      avaliacao: DataTypes.FLOAT,
      comentario: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
      descricao: DataTypes.TEXT,
      duracao: DataTypes.STRING,
      quantidadeDeDias: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "atracoes",
    }
  );
  return atracoes;
};
