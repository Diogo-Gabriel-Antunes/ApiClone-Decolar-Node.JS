"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "viagens",
      [
        {
          companhia: "Gol",
          destino: "São Paulo, SP",
          imagemCompanhia:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1200px-LogoGOL-Pref-FundoClaro-RGB.svg.png",
          data: new Date(),
          preco: 2,
          origem: "Joinville,SC",
          cidadeDaVolta: "São Paulo",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2023, 1, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          companhia: "Latam",
          imagemCompanhia:
            "https://s3-sa-east-1.amazonaws.com/latamprod-sitemedia-red/uploads/cb_163acce79a0c7269e4657024ba5a0c62/latam/images/latam-airlines-logo.png",
          destino: "São Paulo, SP",
          data: new Date(2022, 12, 1),
          cidadeDaVolta: "São Paulo",
          preco: 642.9,
          origem: "Joinville,SC",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2022, 9, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          companhia: "Gidion",
          destino: "São Paulo, SP",
          imagemCompanhia:
            "https://logosag.com.br/wp-content/uploads/Gidion.jpg",
          data: new Date(2022, 11, 1),
          preco: 642.9,
          cidadeDaVolta: "São Paulo",
          origem: "Joinville,SC",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2022, 9, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          companhia: "Gidion",
          destino: "São Paulo, SP",
          imagemCompanhia:
            "https://logosag.com.br/wp-content/uploads/Gidion.jpg",
          data: new Date(2022, 10, 1),
          preco: 642.9,
          cidadeDaVolta: "São Paulo",
          origem: "Joinville,SC",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2022, 9, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          companhia: "Gidion",
          destino: "São Paulo, SP",
          imagemCompanhia:
            "https://logosag.com.br/wp-content/uploads/Gidion.jpg",
          data: new Date(2022, 9, 1),
          preco: 642.9,
          cidadeDaVolta: "São Paulo",
          origem: "Joinville,SC",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2022, 9, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          companhia: "Gidion",
          destino: "São Paulo, SP",
          imagemCompanhia:
            "https://logosag.com.br/wp-content/uploads/Gidion.jpg",
          data: new Date(2023, 3, 1),
          preco: 642.9,
          cidadeDaVolta: "São Paulo",
          origem: "Joinville,SC",
          volta: true,
          HorarioDaIda: "18:25 - Direto",
          HorarioDaVolta: "20:05 - Direto",
          dataVolta: new Date(2022, 9, 30),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("viagens", null, {});
  },
};
