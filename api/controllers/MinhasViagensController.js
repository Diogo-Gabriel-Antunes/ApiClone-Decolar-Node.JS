const { Op } = require("sequelize");
const { sequelize } = require("../models");
const database = require("../models");

class MinhasViagensController {
  static async pegaTodasMinhasViagens(req, res) {
    try {
      const minhasViagens = await database.minhasViagens.findAll();
      res.status(200).json({ minhasViagens });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmaMinhasViagens(req, res) {
    const { id } = req.params;
    try {
      const minhasViagens = await database.minhasViagens.findOne({
        where: { id: id },
      });
      res.status(200).json({ minhasViagens });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmaMinhasViagens(req, res) {
    const infosminhasViagens = req.body;
    try {
      const minhasViagens = await database.minhasViagens.create(
        infosminhasViagens
      );
      return res.status(200).json({ minhasViagens });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmaMinhasViagens(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.minhasViagens.update(novasInfos, {
        where: { id: Number(id) },
      });
      const minhasViagens = await database.minhasViagens.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ minhasViagens });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmaMinhasViagens(req, res) {
    const { id } = req.params;

    try {
      await database.minhasViagens.destroy({ where: { id: Number(id) } });

      return res.status(200).json({
        Message: `minhasViagens de id ${id} foi deletado com sucesso`,
      });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async pegaTodasMinhasViagensPorUsuario(req, res) {
    const { usuarioId } = req.params;
    try {
      const atracoes = await sequelize.query(
        `select * from OpcoesAtracoes inner join minhasViagens on opcaoId where usuarioId = ${usuarioId} and opcaoId = OpcoesAtracoes.id`
      );
      const alugueisCarros = await sequelize.query(
        `select * from aluguelCarros  inner join minhasViagens on alugueisCarrosId where usuarioId = ${usuarioId} and alugueisCarrosId = aluguelCarros.id`
      );
      const alugueisCasa = await sequelize.query(
        `select * from AlugueisCasas  inner join minhasViagens on alugueisCasaId where usuarioId = ${usuarioId} and alugueisCasaId = AlugueisCasas.id`
      );
      const hospedagem = await sequelize.query(
        `select * from  hospedagens  inner join minhasViagens on hospedagemId where usuarioId = ${usuarioId} and hospedagemId = hospedagens.id`
      );
      const viagens = await sequelize.query(
        `select * from viagens inner join minhasViagens on viagensId where usuarioId = ${usuarioId} and viagens.id = viagensId order by minhasViagens.id desc  `
      );
      res
        .status(200)
        .json({ atracoes, alugueisCarros, alugueisCasa, hospedagem, viagens });
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  }
}

module.exports = MinhasViagensController;
