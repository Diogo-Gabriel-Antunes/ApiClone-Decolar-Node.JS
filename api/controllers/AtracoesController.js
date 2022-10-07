const { Op } = require("sequelize");
const database = require("../models");

class AtracoesController {
  static async pegaTodosAtracoes(req, res) {
    const { destino } = req.query;
    let where = {};
    if (destino) {
      where = {
        local: {
          [Op.startsWith]: destino,
        },
      };
    }
    try {
      const atracoes = await database.atracoes.findAll({ where });
      res.status(200).json({ atracoes });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmaAtracao(req, res) {
    const { id } = req.params;
    try {
      const atracoes = await database.atracoes.findOne({ where: { id: id } });
      res.status(200).json({ atracoes });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmaAtracao(req, res) {
    const infosatracoes = req.body;
    try {
      const atracoes = await database.atracoes.create(infosatracoes);
      return res.status(200).json({ atracoes });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmaAtracao(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.atracoes.update(novasInfos, { where: { id: Number(id) } });
      const atracoes = await database.atracoes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ atracoes });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmaAtracao(req, res) {
    const { id } = req.params;

    try {
      await database.atracoes.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `atracoes de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
}

module.exports = AtracoesController;
