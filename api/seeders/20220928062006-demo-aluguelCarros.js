"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "aluguelCarros",
      [
        {
          nome: "HB 20",
          espaco: 5,
          arcondicionado: true,
          kmrodados: 25000,
          precoPorDia: 98.0,
          seguro: true,
          locadora: "Localiza",
          cambio: "Manual",
          localDeRetirada: "Joinville,SC",
          fotoDoCarro:
            "https://motorshow.com.br/wp-content/uploads/sites/2/2021/03/09_hb20_premium.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Kwid",
          espaco: 5,
          arcondicionado: true,
          kmrodados: 50000,
          precoPorDia: 118.0,
          seguro: true,
          cambio: "Manual",
          locadora: "Localiza",
          localDeRetirada: "Joinville,SC",
          fotoDoCarro:
            "https://motorshow.com.br/wp-content/uploads/sites/2/2022/06/13-renault-kwid.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Mobi",
          espaco: 5,
          arcondicionado: true,
          kmrodados: 25000,
          precoPorDia: 98.0,
          seguro: true,
          cambio: "Manual",
          locadora: "Localiza",
          localDeRetirada: "Joinville,SC",
          fotoDoCarro:
            "https://midias.agazeta.com.br/2022/07/11/fiat-mobi-trekking-796798.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("aluguelCarros", null, {});
  },
};
