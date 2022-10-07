'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('viagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companhia: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATEONLY
      },
      preco: {
        type: Sequelize.FLOAT
      },
      imagemCompanhia: {
        type: Sequelize.STRING
      },
      cidadeDaVolta: {
        type: Sequelize.STRING
      },
      HorarioDaIda: {
        type: Sequelize.STRING
      },
      HorarioDaVolta: {
        type: Sequelize.STRING
      },
      origem: {
        type: Sequelize.STRING
      },
      volta: {
        type: Sequelize.BOOLEAN
      },
      dataVolta: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('viagens');
  }
};