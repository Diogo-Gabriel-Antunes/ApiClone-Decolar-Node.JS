const { Op } = require("sequelize");
const database = require("../models");

class AluguelCarrosController {
  static async pegaTodosCarros(req, res) {
    const { localDeRetirada } = req.query;
    try {
      const carros = await database.aluguelCarros.findAll({
        where: {
          localDeRetirada: { [Op.startsWith]: localDeRetirada },
        },
        include: "imagens",
      });
      res.status(200).json({ carros });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmCarro(req, res) {
    const { id } = req.params;
    try {
      const carro = await database.aluguelCarros.findOne({
        where: { id: id },
        include: "imagens",
      });
      res.status(200).json({ carro });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmCarro(req, res) {
    const infosCarro = req.body;
    try {
      const carro = await database.aluguelCarros.create(infosCarro);
      return res.status(200).json({ carro });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmCarro(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.aluguelCarros.update(novasInfos, {
        where: { id: Number(id) },
      });
      const carro = await database.aluguelCarros.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ carro });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmCarro(req, res) {
    const { id } = req.params;

    try {
      await database.aluguelCarros.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `carro de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
}

module.exports = AluguelCarrosController;
