"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "quartosHospedagems",
      [
        {
          nome: "Quarto Standard com Ar-condicionado",
          imagem:
            "//media.staticontent.com/media/pictures/2c301c73-1d4b-499d-abc6-2eda0099124a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/34557a41-101c-49af-8b65-507cec8657da/403x200",
          hidromassagem: true,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/a030963f-3dd3-47c6-9962-44a7cfc6cd3b/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto Economy",
          imagem:
            "//media.staticontent.com/media/pictures/30420a1e-970d-4922-8b2c-b4dea21f722a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Standard Room",
          imagem:
            "//media.staticontent.com/media/pictures/d72ef06f-55ba-4aab-974b-5eef5c1e8316/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto Standard com Ar-condicionado",
          imagem:
            "//media.staticontent.com/media/pictures/2c301c73-1d4b-499d-abc6-2eda0099124a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/34557a41-101c-49af-8b65-507cec8657da/403x200",
          hidromassagem: true,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/a030963f-3dd3-47c6-9962-44a7cfc6cd3b/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto Economy",
          imagem:
            "//media.staticontent.com/media/pictures/30420a1e-970d-4922-8b2c-b4dea21f722a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Standard Room",
          imagem:
            "//media.staticontent.com/media/pictures/d72ef06f-55ba-4aab-974b-5eef5c1e8316/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto Standard com Ar-condicionado",
          imagem:
            "//media.staticontent.com/media/pictures/2c301c73-1d4b-499d-abc6-2eda0099124a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/34557a41-101c-49af-8b65-507cec8657da/403x200",
          hidromassagem: true,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto de Luxo",
          imagem:
            "//media.staticontent.com/media/pictures/a030963f-3dd3-47c6-9962-44a7cfc6cd3b/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Quarto Economy",
          imagem:
            "//media.staticontent.com/media/pictures/30420a1e-970d-4922-8b2c-b4dea21f722a/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Standard Room",
          imagem:
            "//media.staticontent.com/media/pictures/d72ef06f-55ba-4aab-974b-5eef5c1e8316/403x200",
          hidromassagem: false,
          tv: true,
          wifi: true,
          arCondicionado: true,
          frigobar: true,
          quartosHospedagemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quartosHospedagems", null, {});
  },
};
