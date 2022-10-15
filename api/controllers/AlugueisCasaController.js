const { Op } = require("sequelize");
const database = require("../models");

class AlugueisCasaController {
  static async pegaTodosCasa(req, res) {
    const { destino } = req.query;
    let where = {};
    if (destino) {
      where = {
        destino: {
          [Op.startsWith]: destino,
        },
        disponivelParaAlocacao: {
          [Op.is]: true,
        },
      };
    }
    try {
      const AlugueisCasa = await database.AlugueisCasa.findAll({
        where,
        include: ["imagens", "quartos"],
      });
      res.status(200).json({ AlugueisCasa });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmCasa(req, res) {
    const { id } = req.params;
    try {
      const AlugueisCasa = await database.AlugueisCasa.findOne({
        where: { id: id },
        include: ["imagens", "quartos"],
      });
      res.status(200).json({ AlugueisCasa });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmCasa(req, res) {
    const infosAlugueisCasa = req.body;
    try {
      const AlugueisCasa = await database.AlugueisCasa.create(
        infosAlugueisCasa
      );
      return res.status(200).json({ AlugueisCasa });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmCasa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.AlugueisCasa.update(novasInfos, {
        where: { id: Number(id) },
      });
      const AlugueisCasa = await database.AlugueisCasa.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ AlugueisCasa });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmCasa(req, res) {
    const { id } = req.params;

    try {
      await database.AlugueisCasa.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `AlugueisCasa de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async pegaUmQuarto(req, res) {
    const { id } = req.params;
    try {
      const quarto = await database.QuartosAlugueisCasas.findOne({
        where: { id: id },
      });
      res.status(200).json({ quarto });
    } catch (erro) {
      quarto;
      res.status(500).json(erro);
    }
  }
}

module.exports = AlugueisCasaController;
