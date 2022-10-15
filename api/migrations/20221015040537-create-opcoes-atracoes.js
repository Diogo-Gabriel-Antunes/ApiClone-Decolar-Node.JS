"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OpcoesAtracoes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      qtdDias: {
        type: Sequelize.INTEGER,
      },
      Duracao: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      disponibilidade: {
        type: Sequelize.STRING,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      atracaoId: {
        type: Sequelize.INTEGER,
        references: { model: "atracoes", key: "id" },
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
    await queryInterface.dropTable("OpcoesAtracoes");
  },
};
