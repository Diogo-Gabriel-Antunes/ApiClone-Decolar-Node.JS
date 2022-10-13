const { Router } = require("express");
const viagens = require("./api/routes/viagensRoute");
const hospedagem = require("./api/routes/hospedagemRoutes");
const carros = require("./api/routes/aluguelCarrosRoutes");
const alugueisCasa = require("./api/routes/AlugueisCasaRoute");
const atracoes = require("./api/routes/atracoesRoute");
const usuarios = require("./api/routes/UsuariosRoute");
const minhasViagens = require("./api/routes/MinhasViagensRoute");

const app = Router();

app.use(
  viagens,
  hospedagem,
  carros,
  alugueisCasa,
  atracoes,
  usuarios,
  minhasViagens
);

module.exports = app;
