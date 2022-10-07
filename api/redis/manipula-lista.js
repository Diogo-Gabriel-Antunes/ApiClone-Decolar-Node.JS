const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { createHash } = require("crypto");

function geraTokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}

module.exports = (lista) => {
  const existsAsync = promisify(lista.exists).bind(lista);
  const setAsync = promisify(lista.set).bind(lista);
  const getAsync = promisify(lista.get).bind(lista);
  const delAsync = promisify(lista.del).bind(lista);
  return {
    adiciona: async (chave, valor, dataExpiracao) => {
      await setAsync(chave, valor);
      lista.expireat(chave, dataExpiracao);
    },
    async buscaValor(chave) {
      return await getAsync(chave);
    },
    contemToken: async (token) => {
      const resultado = await existsAsync(token);
      return resultado === 1;
    },
    deleta: async (token) => {
      await delAsync(token);
    },
  };
};
