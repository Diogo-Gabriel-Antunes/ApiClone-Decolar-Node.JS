const database = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hash = require("../config/auth.json");
const blacklist = require("../redis/manipula-blacklist");
const crypto = require("crypto");
const moment = require("moment");
const allowList = require("../redis/allowlist-refresh-token");
const auth = require("../middleware/auth");
function geradorDeToken(parametros = {}) {
  return jwt.sign(parametros, hash.secret, {
    expiresIn: "15s",
  });
}

async function geradorRefreshToken(usuario) {
  const refreshToken = crypto.randomBytes(24).toString("hex");
  const dataExpiracao = moment().add(5, "d").unix();
  await allowList.adiciona(refreshToken, usuario.id, dataExpiracao);
  return refreshToken;
}

class UsuarioController {
  static async pegaTodosUsuarios(req, res) {
    try {
      const usuarios = await database.usuarios.findAll();
      res.status(200).json({ usuarios });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  static async pegaUmusuario(req, res) {
    const { id } = req.params;
    try {
      const usuario = await database.usuarios.findOne({ where: { id: id } });
      usuario.senha = undefined;
      res.status(200).json({ usuario });
    } catch (erro) {
      res.status(500).json(erro);
    }
  }
  static async criaUmusuario(req, res) {
    let infosUsuario = req.body;
    infosUsuario.senha = await bcrypt.hash(infosUsuario.senha, 12);
    try {
      const usuario = await database.usuarios.create(infosUsuario);

      return res.status(200).json({
        usuario,
        token: geradorDeToken({ id: usuario.id, nome: usuario.nome }),
      });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async atualizaUmusuario(req, res) {
    const { id } = req.params;
    let novasInfos = req.body;
    if (novasInfos.senha) {
      novasInfos.senha = await bcrypt.hash(novasInfos.senha, 12);
    }
    try {
      await database.usuarios.update(novasInfos, { where: { id: Number(id) } });
      const usuario = await database.usuarios.findOne({
        where: { id: Number(id) },
      });
      usuario.senha = undefined;
      return res.status(200).json({ usuario });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async deletaUmusuario(req, res) {
    const { id } = req.params;

    try {
      await database.usuarios.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ Message: `usuario de id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  static async LoginDoUsuario(req, res) {
    let { email, senha } = req.body;
    const requisicao = await req.user;
    let where = {};
    if (requisicao) {
      console.log(requisicao.dataValues);
      senha = requisicao.dataValues.senha;
    }
    requisicao
      ? (where = { email: requisicao.dataValues.email })
      : (where = { email: email });

    try {
      const usuario = await database.usuarios.findOne({
        where,
      });

      if (!usuario) {
        return res.status(400).send({ error: "Usuario Invalido" });
      }
      if (!(await bcrypt.compare(senha, usuario.senha))) {
        return res
          .status(404)
          .json({ message: `A senha  é uma senha invalida` });
      }
      return res.send({
        usuario,
        token: geradorDeToken({ id: usuario.id, nome: usuario.nome }),
        refreshToken: await geradorRefreshToken(usuario),
      });
    } catch (erro) {
      return res.status(500).send(erro.message);
    }
  }
  static async AtualizaToken(req, res) {
    const requisicao = await req.user;
    let where = { email: requisicao.dataValues.email };

    try {
      const usuario = await database.usuarios.findOne({
        where,
      });

      if (!usuario) {
        return res.status(400).send({ error: "Usuario Invalido" });
      }

      return res.send({
        usuario,
        token: geradorDeToken({ id: usuario.id, nome: usuario.nome }),
        refreshToken: await geradorRefreshToken(usuario),
      });
    } catch (erro) {
      return res.status(500).send(erro.message);
    }
  }

  static async Logout(req, res) {
    try {
      const infos = req.body;
      await blacklist.adiciona(infos.token);
      return res.status(204).send("Logout efetuado com sucesso");
    } catch (erro) {
      return res.status(500).send(erro.Message);
    }
  }
  static async verificaAuthenticacao(req, res) {
    const { token } = req.params;

    jwt.verify(token, hash.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ auth: false });
      }

      req.Usuarioid = decoded.id;
      return res.status(200).json({ auth: true });
    });
  }
}

module.exports = UsuarioController;
