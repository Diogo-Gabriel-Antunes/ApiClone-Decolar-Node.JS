'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('hospedagens', [{
      nome: "Copacabana",
      distanciaDoCentro: 5.8,
      avaliacao: 4,
      preco: 365,
      localizacao:"Rio de Janeiro",
      sobre: "A cidade de Recife abriga o Hotel Jangadeiro, propriedade situada em frente à praia de Boa Viagem e a 5 km do Aeroporto Internacional de Recife – Guararapes. O hotel dispõe de piscina ao ar livre e café da manhã."

      +"As acomodações possuem TV, telefone e Wi-Fi grátis."
      
      +"Além do café da manhã, cortesia do hotel, o Jangadeiro oferece um restaurante e um coffee shop em suas instalações."
      
      +"No hotel, o hóspede encontrará business center, solário, sala de TV e serviço de aluguel de carros. A recepção e a segurança operam 24h."
      
     +" O Parque dos Manguezais está a 2,5 km do Hotel Jangadeiro, enquanto que a cidade de Olinda fica a 17 km.",
      imagem: "https://media.staticontent.com/media/pictures/97146a36-6f6b-4169-a64d-91618c3b7c49",
      tipo: "Hotel",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Copacabana",
      distanciaDoCentro: 5.8,
      avaliacao: 4,
      preco: 365,
      localizacao:"Rio de Janeiro",
      sobre: "A cidade de Recife abriga o Hotel Jangadeiro, propriedade situada em frente à praia de Boa Viagem e a 5 km do Aeroporto Internacional de Recife – Guararapes. O hotel dispõe de piscina ao ar livre e café da manhã."

      +"As acomodações possuem TV, telefone e Wi-Fi grátis."
      
      +"Além do café da manhã, cortesia do hotel, o Jangadeiro oferece um restaurante e um coffee shop em suas instalações."
      
      +"No hotel, o hóspede encontrará business center, solário, sala de TV e serviço de aluguel de carros. A recepção e a segurança operam 24h."
      
     +" O Parque dos Manguezais está a 2,5 km do Hotel Jangadeiro, enquanto que a cidade de Olinda fica a 17 km.",
      imagem: "https://media.staticontent.com/media/pictures/97146a36-6f6b-4169-a64d-91618c3b7c49",
      tipo: "Hotel",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Copacabana",
      distanciaDoCentro: 5.8,
      avaliacao: 4,
      preco: 365,
      localizacao:"Rio de Janeiro",
      sobre: "A cidade de Recife abriga o Hotel Jangadeiro, propriedade situada em frente à praia de Boa Viagem e a 5 km do Aeroporto Internacional de Recife – Guararapes. O hotel dispõe de piscina ao ar livre e café da manhã."

      +"As acomodações possuem TV, telefone e Wi-Fi grátis."
      
      +"Além do café da manhã, cortesia do hotel, o Jangadeiro oferece um restaurante e um coffee shop em suas instalações."
      
      +"No hotel, o hóspede encontrará business center, solário, sala de TV e serviço de aluguel de carros. A recepção e a segurança operam 24h."
      
     +" O Parque dos Manguezais está a 2,5 km do Hotel Jangadeiro, enquanto que a cidade de Olinda fica a 17 km.",
      imagem: "https://media.staticontent.com/media/pictures/97146a36-6f6b-4169-a64d-91618c3b7c49",
      tipo: "Hotel",
      createdAt:new Date(),
      updatedAt:new Date()
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
