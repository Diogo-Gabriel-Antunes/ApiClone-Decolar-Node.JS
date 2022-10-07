'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class atracoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  atracoes.init({
    imagem: DataTypes.STRING,
    nome:DataTypes.STRING,
    local:DataTypes.STRING,
    avaliacao: DataTypes.FLOAT,
    comentario: DataTypes.INTEGER,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'atracoes',
  });
  return atracoes;
};