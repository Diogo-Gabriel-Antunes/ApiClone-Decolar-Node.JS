"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("QuartosAlugueisCasas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      hidromassagem: {
        type: Sequelize.BOOLEAN,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      tv: {
        type: Sequelize.BOOLEAN,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
      },
      arCondicionado: {
        type: Sequelize.BOOLEAN,
      },
      frigobar: {
        type: Sequelize.BOOLEAN,
      },
      quartoAlugueisCasaId: {
        type: Sequelize.INTEGER,
        references: { model: "hospedagens", key: "id" },
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
    await queryInterface.dropTable("quartosAlugueisCasa");
  },
};
