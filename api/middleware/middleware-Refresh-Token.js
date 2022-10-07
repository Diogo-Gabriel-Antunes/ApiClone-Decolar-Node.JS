const database = require("../models");
const allowList = require("../redis/allowlist-refresh-token");

async function verificaRefreshToken(refreshToken) {
  if (!refreshToken) {
    throw new Error("Token Invalido");
  }
  const id = await allowList.buscaValor(refreshToken);
  if (!id) {
    throw new Error("Token Invalido");
  }
  return id;
}

async function invalidaRefreshToken(refreshToken) {
  await allowList.deleta(refreshToken);
}

module.exports = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const id = await verificaRefreshToken(refreshToken);
    await invalidaRefreshToken(refreshToken);
    req.user = await database.usuarios.findOne({ where: { id: id } });
    return next();
  } catch (erro) {
    return res.status(401).json({ erro: erro.message });
  }
};
