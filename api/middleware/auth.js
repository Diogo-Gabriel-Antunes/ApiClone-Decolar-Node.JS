const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const blacklist = require("../redis/manipula-blacklist");

async function verificaTokenNaBlacklist(token) {
  const tokenNaBlacklist = await blacklist.contemToken(token);
  if (tokenNaBlacklist) {
    return true;
  }
  return false;
}

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ error: "Token não foi informado" });
  }

  const parts = authorization.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Erro no token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "token mal formatado" });
  }

  if (verificaTokenNaBlacklist(token)) {
    return res.status(401).send({ error: "Token expirado" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Token Invalido" });
    }

    req.userId = decoded.id;

    return next();
  });
};
