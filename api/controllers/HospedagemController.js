const { Op } = require("sequelize");
const database = require("../models");

class HospedagemController {
  static async pegaTodasHospedagem(req, res) {
    const { localizacao } = req.query;
    try {
      let where = {};
      if (localizacao) {
        where = {
          localizacao: {
            [Op.startsWith]: localizacao,
          },
        };
      }
      const hospedagem = await database.hospedagens.findAll({
        where,
        include: ["imagens", "quartos"],
      });
      res.status(200).json({ hospedagem });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmaHospedagem(req, res) {
    const { id } = req.params;
    try {
      const hospedagem = await database.hospedagens.findOne({
        where: { id: id },
        include: ["imagens", "quartos"],
      });
      res.status(200).json({ hospedagem });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmaHospedagem(req, res) {
    const infosHospedagem = req.body;
    try {
      const hospedagem = await database.hospedagens.create(infosHospedagem);
      return res.status(200).json({ hospedagem });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmaHospedagem(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.hospedagens.update(novasInfos, {
        where: { id: Number(id) },
      });
      const hospedagem = await database.hospedagens.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ hospedagem });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmaHospedagem(req, res) {
    const { id } = req.params;

    try {
      await database.hospedagens.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `hospedagem de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
}

module.exports = HospedagemController;
