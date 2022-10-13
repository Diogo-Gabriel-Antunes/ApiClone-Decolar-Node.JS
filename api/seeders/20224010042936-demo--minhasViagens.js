"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "minhasViagens",
      [
        {
          dataInicio: new Date(),
          dataFinal: new Date(),
          alugueisCasaId: 1,
          alugueisCarrosId: null,
          atracaoId: null,
          hospedagemId: null,
          viagensId: null,
          usuarioId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dataInicio: new Date(),
          dataFinal: new Date(),
          alugueisCasaId: null,
          alugueisCarrosId: null,
          atracaoId: 1,
          hospedagemId: null,
          viagensId: null,
          usuarioId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dataInicio: new Date(),
          dataFinal: new Date(),
          alugueisCasaId: null,
          alugueisCarrosId: null,
          atracaoId: null,
          hospedagemId: null,
          viagensId: 1,
          usuarioId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("minhasViagens", null, {});
  },
};
