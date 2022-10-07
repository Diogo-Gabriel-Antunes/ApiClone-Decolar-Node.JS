'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hospedagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      distanciadocentro: {
        type: Sequelize.FLOAT
      },
      avaliacao: {
        type: Sequelize.INTEGER
      },
      preco: {
        type: Sequelize.FLOAT
      },
      sobre: {
        type: Sequelize.TEXT
      },
      imagem: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hospedagens');
  }
};