"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "AlugueisCasas",
      [
        {
          nome: "Hotel Fazenda Dona Francisca",
          distanciadocentro: 22.97,
          avaliacao: 7.8,
          destino: "Joinville,sc",
          disponivelParaAlocacao: false,
          sobre:
            "Hotel Fazenda Dona Francisca está localizado em Joinville. Conta com wi-fi grátis nas áreas comuns, serviço de spa e sauna, além de estacionamento grátis.",
          preco: 845,
          imagem:
            "https://media.staticontent.com/media/pictures/bf82fe7c-bca6-48e9-8dea-84384178831e/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "EXCELENTE APARTAMENTO NO CENTRO",
          distanciadocentro: 0.166,
          avaliacao: 0,
          destino: "Joinville,sc",
          sobre:
            "Em Joinville (Centro), Em Joinville (na área de Centro), este apartamento fica a apenas alguns passos de Museu Nacional da" +
            " Imigração e Colonização e a 3 minutos a pé de Catedral de São Francisco Xavier. Este apartamento fica a 1 km de Museu Nacional do Bombeiro e a 1,1 km de Museu Arqueológico de Sambaqui. Este apartamento conta com cozinhas, geladeiras e um fogão para deixar você confortável. Oferecemos smart TVs 32-polegadas com Netflix para entretenimento e Wi-Fi de cortesia para mantê-lo conectado. As conveniências incluem máquina de lavar e ferros/tábuas de passar roupa, e o serviço doméstico é oferecido diariamente. Relaxe em uma das" +
            "2 piscinas externas ou aproveite outras instalações recreativas, que incluem uma academia. Estacionamento grátis sem manobrista está disponível no local.",
          preco: 196,
          imagem:
            "https://media.staticontent.com/media/pictures/7cb81989-d893-4d51-a5a0-e25828b801f6/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ed Max Loft",
          distanciadocentro: 1.27,
          avaliacao: 5,
          destino: "Joinville,sc",
          disponivelParaAlocacao: true,
          sobre:
            "Em Joinville (América), Em Joinville (na área de América)," +
            "Ed Max Loft fica a apenas 10 minutos de caminhada de Instituto Internacional Juarez Machado e de Museu de Artes de Joinville. Sinta-se em casa em um de nossos 9 quartos que apresentam cozinhas com Geladeira/freezer grandes e fogão." +
            "Wi-Fi de cortesia está disponível para manter você conectado. Estacionamento grátis sem manobrista está disponível no local.",
          preco: 238,
          imagem:
            "https://media.staticontent.com/media/pictures/066efdc4-e533-44d2-a65e-799dcc2077e7/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ad Abdon Batista",
          distanciadocentro: 0.425,
          avaliacao: 0,
          destino: "Joinville,sc",
          disponivelParaAlocacao: true,
          sobre:
            "Em Joinville (Joinville Centro), Ad Abdon Batista, em Joinville (Joinville Centro), fica a apenas alguns minutos de Museu Nacional da Imigração " +
            "e Colonização e Catedral de São Francisco Xavier. Sinta-se em casa em um de nossos 8 quartos que apresentam cozinhas com micro-ondas " +
            "e lava-louças. Wi-Fi de cortesia está disponível para manter você conectado. Estacionamento sem manobrista (sujeito a cobrança) está disponível no local.",
          preco: 162,
          imagem:
            "https://media.staticontent.com/media/pictures/f38ff4b3-240a-4b1c-9a7c-b14eff5f3a44/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AlugueisCasas", null, {});
  },
};
