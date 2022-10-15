"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "OpcoesAtracoes",
      [
        {
          qtdDias: 1,
          Duracao: "11 Hrs",
          disponibilidade: "Todos os dias",
          nome: "Transporte ida e volta ao Beto Carrero saindo de B. Camboriú",
          preco: 55,
          atracaoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          qtdDias: 2,
          Duracao: "11 Hrs",
          disponibilidade: "Todos os dias",
          nome: "Transporte ida e volta ao Beto Carrero saindo de B. Camboriú",
          preco: 115,
          atracaoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          qtdDias: 1,
          Duracao: "11 Hrs",
          disponibilidade: "Todos os dias",
          nome: "Transporte ida e volta ao Beto Carrero saindo de B. Camboriú",
          preco: 166,
          atracaoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OpcoesAtracoes", null, {});
  },
};
