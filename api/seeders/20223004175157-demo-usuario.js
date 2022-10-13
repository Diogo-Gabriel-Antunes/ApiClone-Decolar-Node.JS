'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('usuarios', [{
        id: 1,
        nome: "admin",
        email: "admin@email.com.br",
        senha: "$2b$12$lDykq/zdrGV/6eFkWNLUhOCGRcNkwk/Rk2jOhn//LCeaK/IhNLK2a",
        role: "ADMIN",
        foto: "Não sei",
        pontos:120,
        pontosPendentes:100,
        updatedAt: new Date(),
        createdAt:  new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      Example:
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
