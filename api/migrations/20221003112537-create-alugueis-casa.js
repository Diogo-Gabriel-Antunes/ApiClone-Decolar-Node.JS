"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AlugueisCasas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      disponivelParaAlocacao: {
        type: Sequelize.BOOLEAN,
      },
      destino: {
        type: Sequelize.STRING,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      distanciadocentro: {
        type: Sequelize.FLOAT,
      },
      avaliacao: {
        type: Sequelize.FLOAT,
      },
      sobre: {
        type: Sequelize.TEXT,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AlugueisCasas");
  },
};
