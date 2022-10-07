'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('atracoes', [{
      imagem: "https://media.staticontent.com/media/pictures/fbdd8bfd-566a-485f-a004-4e4573221929/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Transporte ida e volta ao Beto Carrero saindo de B. Camboriú",
      avaliacao: 8.6,
      comentario: 193,
      preco: 51,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      imagem: "https://media.staticontent.com/media/pictures/12ecd034-c7eb-45d2-b1a2-f544972b8bba/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Rota Germânica por Ilhota, Blumenau e Pomerode",
      avaliacao: 8.6,
      comentario: 124,
      preco: 106,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      imagem: "https://media.staticontent.com/media/pictures/18398607-0209-4826-af5f-49854b9f70d2/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Beto Carrero: Ingresso + Transfer desde B. Camboriú",
      avaliacao: 8.6,
      comentario: 193,
      preco: 282,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      imagem: "https://media.staticontent.com/media/pictures/209c8eb8-dba1-4691-88f2-273403092e14/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Tour Panorâmico por Bombinhas, 7 praias + tempo livre",
      avaliacao: 9.1,
      comentario: 8,
      preco: 154,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      imagem: "https://media.staticontent.com/media/pictures/51d59106-dae1-416a-8555-31907f0fd05b/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Vale Europeu - Tour Blumenau e Pomerode",
      avaliacao: 8.6,
      comentario: 115,
      preco: 115,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      imagem: "https://media.staticontent.com/media/pictures/e08b809c-728a-4a07-94f6-32c35890aec4/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
      nome: "Almoço Restaurante Dom Alberto (Buffet)",
      avaliacao: 10,
      comentario: 4,
      preco: 53,
      local:"Balneario Comburiu,SC",
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('atracoes', null, {});

  }
};
