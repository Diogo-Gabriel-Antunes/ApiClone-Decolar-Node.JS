const { Op } = require("sequelize");
const { sequelize } = require("../models");
const database = require("../models");

class ViagensController {
  static async pegaTodasViagens(req, res) {
    const { destino, origem, data, dataVolta } = req.query;
    let where = {};
    if (destino && origem && data && dataVolta) {
      where = {
        origem: {
          [Op.startsWith]: origem,
        },
        destino: {
          [Op.startsWith]: destino,
        },
        data: {
          [Op.gte]: data,
          [Op.lte]: dataVolta,
        },
        dataVolta: {
          [Op.gte]: data,
          [Op.lte]: dataVolta,
        },
      };
    } else {
      where = {
        origem: {
          [Op.startsWith]: origem,
        },
        destino: {
          [Op.startsWith]: destino,
        },
      };
    }
    try {
      const viagens = await database.viagens.findAll({ where });
      res.status(200).json({ viagens });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmaViagem(req, res) {
    const { id } = req.params;
    try {
      const viagem = await database.viagens.findOne({ where: { id: id } });
      res.status(200).json({ viagem });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmaViagem(req, res) {
    const infosViagem = req.body;
    try {
      const viagem = await database.viagens.create(infosViagem);
      return res.status(200).json({ viagem });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmaViagem(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.viagens.update(novasInfos, { where: { id: Number(id) } });
      const viagem = await database.viagens.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ viagem });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmaViagem(req, res) {
    const { id } = req.params;

    try {
      await database.viagens.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `viagem de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async relatorioPorMes(req, res) {
    try {
      const setembro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 9 group by month(9)"
      );
      const outubro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 10 group by month(10)"
      );
      const novembro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 11 group by month(11)"
      );
      const dezembro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 12 group by month(12)"
      );
      const janeiro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 1 and year(data)=2023 group by month(1)"
      );
      const fevereiro = await sequelize.query(
        "select min(preco) as minimo from viagens where MONTH(data) = 2 and year(data)=2023 group by month(2)"
      );
      res
        .status(200)
        .json({ setembro, outubro, novembro, dezembro, janeiro, fevereiro });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
}

module.exports = ViagensController;
