"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class imagensViagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.imagensViagens.belongsTo(models.viagens, {
        foreignKey: "viagensId",
      });
    }
  }
  imagensViagens.init(
    {
      imagem: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "imagensViagens",
    }
  );
  return imagensViagens;
};
