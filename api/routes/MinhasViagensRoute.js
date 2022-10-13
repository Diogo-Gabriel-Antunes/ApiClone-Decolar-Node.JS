const { Router } = require("express");
const MinhasViagensController = require("../controllers/MinhasViagensController");
const middleware = require("../middleware/auth");
const app = Router();

app.get("/minhasviagens", MinhasViagensController.pegaTodasMinhasViagens);
app.get("/minhasviagens/:id", MinhasViagensController.pegaUmaMinhasViagens);
app.get(
  "/minhasviagens/usuario/:usuarioId",
  MinhasViagensController.pegaTodasMinhasViagensPorUsuario
);
app.post("/minhasviagens", MinhasViagensController.criaUmaMinhasViagens);
app.put("/minhasviagens/:id", MinhasViagensController.atualizaUmaMinhasViagens);
app.delete(
  "/minhasviagens/:id",
  MinhasViagensController.deletaUmaMinhasViagens
);

module.exports = app;
