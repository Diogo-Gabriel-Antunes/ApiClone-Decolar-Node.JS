const { Router } = require("express");
const AtracoesController = require("../controllers/AtracoesController");
const middleware = require("../middleware/auth");
const app = Router();

app.get("/atracoes", AtracoesController.pegaTodosAtracoes);
app.get("/atracoes/:id", AtracoesController.pegaUmaAtracao);
app.get("/opcao/:id", AtracoesController.pegaUmaOpcao);
app.post("/atracoes", AtracoesController.criaUmaAtracao);
app.put("/atracoes/:id", AtracoesController.atualizaUmaAtracao);
app.delete("/atracoes/:id", AtracoesController.deletaUmaAtracao);

module.exports = app;
