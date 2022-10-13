"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "atracoes",
      [
        {
          imagem:
            "https://media.staticontent.com/media/pictures/fbdd8bfd-566a-485f-a004-4e4573221929/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Transporte ida e volta ao Beto Carrero saindo de B. Camboriú",
          avaliacao: 8.6,
          comentario: 193,
          preco: 51,
          local: "Balneario Comburiu,SC",
          duracao: "11 Hs",
          quantidadeDeDias: 3,
          descricao:
            "Saída para passageiros hospedados em Bal. Camboriú A partir das 08:00 h a.m com destino ao Parque Beto Carrero World." +
            " Considerado um dos maiores parque temáticos da America Latina," +
            " oferece aos seus visitantes muita diversão e atividades para todas as idades. Conta com zoologico, shows e brinquedos com muita adrenalina." +
            " O parque possui completa estrutura de restaurantes e lanchonetes, lojas, segurança e apoio de equipe especializada por atender as necessidades de seus visitantes." +
            " Ingresso não incluido. Após o ultimo show, os estaremos esperando no local indicado para traslado de regresso a seu hotel" +
            "Tour realizado em serviço regular ou compartilhado com outros passageiros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imagem:
            "https://media.staticontent.com/media/pictures/12ecd034-c7eb-45d2-b1a2-f544972b8bba/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Rota Germânica por Ilhota, Blumenau e Pomerode",
          avaliacao: 8.6,
          comentario: 124,
          preco: 106,
          local: "Balneario Comburiu,SC",
          duracao: "10 Hs",
          quantidadeDeDias: 1,
          descricao:
            "• Ilhota é um importante polo de confecções de modas íntimas, praia e fitness. Sendo assim, você poderá aproveitar a parada para fazer compras." +
            "• Blumenau é uma cidade de grandes eventos, conhecida como a Capital da Cerveja do Brasil. Na qual você visitará seus principais pontos turísticos como o Museu da Cerveja, a Avenida Beira Rio, o Castelinho da Havan, a vista panorâmica da Prefeitura e da Ponte de Ferro, além de uma parada na Vila Germânica, onde se realiza a conhecida Oktoberfest." +
            "• Pomerode é a cidade mais alemã do Brasil, na qual 90% dos moradores falam o idioma alemão. Preserva seus costumes através de festas populares, da arquitetura em estilo enxaimel, com casas" +
            "históricas da época da Segunda Guerra Mundial, da gastronomia e do artesanato. Você terá tempo para fazer compras de lembrancinhas regionais ou saborear os doces típicos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imagem:
            "https://media.staticontent.com/media/pictures/18398607-0209-4826-af5f-49854b9f70d2/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Beto Carrero: Ingresso + Transfer desde B. Camboriú",
          avaliacao: 8.6,
          comentario: 193,
          preco: 282,
          local: "Balneario Comburiu,SC",
          duracao: "11 Hs",
          quantidadeDeDias: 1,
          descricao:
            "Que horas inicia o passeio? Para um dia bem divertido e proveitoso, buscaremos os passageiros às 8hs, como o passeio é regular, pode ocorrer um pequeno atraso, pois buscaremos outros viajantes e retornaremos para os hotéis por volta das 19hs." +
            "O transporte busca nos hotéis? Sim! Fique tranquilo que buscaremos nos hotéis dentro da cidade de Balneário Camboriú, é importante que estejam à postos na recepção do hotel para não termos atrasos e o dia ser bem proveitoso!" +
            "Quais os dias que acontece o passeio? O passeio acontece de acordo com o período de utilização do parque e disponibilidade, veja o calendário para verificar disponibilidade na data desejada ok?" +
            "O que vou conhecer neste passeio? Você vai conhecer o MAIOR PARQUE TEMÁTICO DA AMÉRICA LATINA, o BETO CARRERO WORLD." +
            "Iniciando pelo Castelo das Nações, foi inspirado nos castelos medievais e sua pintura artística foi elaborada para que o visitante já entre na atmosfera da fantasia. Este é o grande portal de entrada do Beto Carrero World, e um dos maiores símbolos do melhor parque da América do Sul. Mais que um portal, é dentro do Castelo que estão localizadas as bilheterias, as salas para retirada de passaportes, agência bancária, caixas eletrônicos, loja da Grife Beto Carrero e Betinho Carrero, serviço de achados e perdidos, guarda-volumes, setores administrativos, os Super Carros, espaços para eventos e sanitários. Prepare-se, pois será um dia cheio de aventura e muita diversão" +
            "Este passeio inclui o passaporte? Sim, este tour inclui o passaporte! Os valores variam de acordo com o data desejada e disponibilidade do parque, confira a data do seu interesse no calendário!" +
            " Este combo não está vinculado a nenhuma eventual promoção feita pelo parque Beto Carrero World.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imagem:
            "https://media.staticontent.com/media/pictures/209c8eb8-dba1-4691-88f2-273403092e14/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Tour Panorâmico por Bombinhas, 7 praias + tempo livre",
          avaliacao: 9.1,
          comentario: 8,
          preco: 154,
          local: "Balneario Comburiu,SC",
          duracao: "8 Hs",
          quantidadeDeDias: 1,
          descricao:
            "A melhor forma de conhecer Bombinhas, um passeio completo que passa pelas mais belas praias do Sul do Brasil. Por se tratar de uma península com geografia recortada ímpar, Bombinhas oferece uma grande variedade de praias." +
            "Tour para toda a família, a bordo do Overland, veículo estilo safari, cômodo, seguro e que permite uma visão mais ampla das paisagens. Conheceremos Bombas, Bombinhas, Quatro Ilhas, Mariscal, Conceição, Canto Grande, Morrinhos e Zimbros. Paisagens lindíssimas, paradas, vila de pescadores, histórias e mirante." +
            "Animação, músicas e acompanhamento de guia." +
            "O percurso de Bal. Camboriú até Bombinhas é realizado de van, chegando na cidade será recebido pela nossa equipe." +
            "A duração do tour panorâmico é de 2h30min e terá ainda 3 horas de tempo livre para curtir a praia de Bombinhas, almoçar ou fazer compras no centrinho." +
            "Horário de retorno para Bal. Camboriú é as 16:00h",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imagem:
            "https://media.staticontent.com/media/pictures/51d59106-dae1-416a-8555-31907f0fd05b/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Vale Europeu - Tour Blumenau e Pomerode",
          avaliacao: 8.6,
          comentario: 115,
          preco: 115,
          local: "Balneario Comburiu,SC",
          duracao: "9 Hs",
          quantidadeDeDias: 1,
          descricao:
            "Conheça as duas principais cidades turísticas do Vale Europeu, Blumenau e Pomerode, famosas pela influência da cultura Alemã. As cidades mantêm fortes características europeias, que encantam seus visitantes com sua arquitetura típica, gastronomia, natureza, indústrias, cerveja e festas." +
            "Em Blumenau visitaremos o museu da cerveja, faremos um passeio panorâmico passando pelo pela prefeitura, construída em estilo Enxaimel (estilo alemão). Seguiremos para a Vila Germânica, local onde se realiza a Oktoberfest, a segunda maior festa da cerveja do mundo, onde teremos tempo livre para passear e desfrutar da comida típica." +
            "Continuaremos para a cidade de Pomerode, cidade de pequeno porte muito charmosa, faremos uma parada no portal da cidade e continuaremos até o centrinho onde se concentram várias atrações, podendo realizar todas elas caminhando. A cervejaria Schornstein, o bar oficial da mesma no antigo prédio que deu início a fábrica, o Museu Pomerano, feira de artesanato, Zoo de Pomerode, Museu do Automóvel e Parque Vila Encantada. Terá tempo livre para aproveitar algumas destas atrações. Finalmente antes do retorno, visitaremos o Museu Casa do Imigrante Carl Weege, patrimônio de uma das famílias fundadoras da cidade, mostra como era a rotina das famílias colonizadoras através de um rico acervo." +
            "Observações. A excussão não inclui os ingressos para Zoo, Museu Pomerano, Parque Vila Encantada e Museu do Automóvel, visita opcional. O itinerário da excursão poderá sofrer alterações dependendo das condições do trânsito. O almoço não está incluído na excursão. Congestionamentos podem ocorrer na estrada para Blumenau durante feriados e época de festas. Essa excursão não será cancelada por motivos meteorológicos (chuva). O tempo da excursão é aproximado e está sujeito a alterações.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imagem:
            "https://media.staticontent.com/media/pictures/e08b809c-728a-4a07-94f6-32c35890aec4/409x210?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1",
          nome: "Almoço Restaurante Dom Alberto (Buffet)",
          avaliacao: 10,
          comentario: 4,
          preco: 53,
          local: "Balneario Comburiu,SC",
          duracao: "1:30 Hs",
          quantidadeDeDias: 1,
          descricao:
            "Delicioso buffet variado com aproximadamente 25 tipos de saladas, 25 tipos de pratos quentes, churrasco, pizza feita no forno a lenha e 08 tipos de sobremesas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("atracoes", null, {});
  },
};
