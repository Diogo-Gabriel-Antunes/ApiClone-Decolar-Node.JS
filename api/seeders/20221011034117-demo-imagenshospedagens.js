"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "imagensHospedagems",
      [
        {
          hospedagemId: 1,

          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hospedagemId: 2,

          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hospedagemId: 3,

          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/759a905d-7b80-4fd1-a592-a3f29852d786",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/cd976cad-72a7-4b10-a3a3-961ccdcd4899",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/8b0e86e5-5bcd-4f67-9c48-3339124dfc16",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/c9357141-2596-4701-848a-3db8bc1d40cc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 2,
        },

        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/759a905d-7b80-4fd1-a592-a3f29852d786",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/cd976cad-72a7-4b10-a3a3-961ccdcd4899",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/8b0e86e5-5bcd-4f67-9c48-3339124dfc16",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/c9357141-2596-4701-848a-3db8bc1d40cc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 3,
        },

        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/d81568c0-9582-455b-ba9e-9beaace192bc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/759a905d-7b80-4fd1-a592-a3f29852d786",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/68ed7a75-1c8a-4944-957b-c56bf7a669df",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/cd976cad-72a7-4b10-a3a3-961ccdcd4899",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/8b0e86e5-5bcd-4f67-9c48-3339124dfc16",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
        {
          imagem:
            "//media.staticontent.com/media/pictures/c9357141-2596-4701-848a-3db8bc1d40cc",
          createdAt: new Date(),
          updatedAt: new Date(),
          hospedagemId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("imagensHospedagems", null, {});
  },
};
