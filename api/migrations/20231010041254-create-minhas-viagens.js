"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("minhasViagens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      alugueisCarrosId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "aluguelCarros", key: "id" },
      },
      alugueisCasaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "AlugueisCasas", key: "id" },
      },
      opcaoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "OpcoesAtracoes", key: "id" },
      },
      hospedagemId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "hospedagens", key: "id" },
      },
      viagensId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "viagens", key: "id" },
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "usuarios", key: "id" },
      },
      dataInicio: {
        type: Sequelize.DATEONLY,
      },
      dataFinal: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable("minhasViagens");
  },
};
