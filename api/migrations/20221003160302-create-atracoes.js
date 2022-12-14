"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("atracoes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      local: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      avaliacao: {
        type: Sequelize.FLOAT,
      },
      comentario: {
        type: Sequelize.INTEGER,
      },
      duracao: {
        type: Sequelize.STRING,
      },
      quantidadeDeDias: {
        type: Sequelize.INTEGER,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      descricao: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("atracoes");
  },
};
