"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("aluguelCarros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      cambio: {
        type: Sequelize.STRING,
      },
      fotoDoCarro: {
        type: Sequelize.STRING,
      },
      localDeRetirada: {
        type: Sequelize.STRING,
      },
      locadora: {
        type: Sequelize.STRING,
      },
      espaco: {
        type: Sequelize.INTEGER,
      },
      arcondicionado: {
        type: Sequelize.BOOLEAN,
      },
      kmrodados: {
        type: Sequelize.INTEGER,
      },
      precoPorDia: {
        type: Sequelize.FLOAT,
      },
      seguro: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("aluguelCarros");
  },
};
