const { Router } = require("express");
const AlugueisCasaController = require("../controllers/AlugueisCasaController");

const app = Router();

app.get("/alugueiscasa", AlugueisCasaController.pegaTodosCasa);
app.get("/alugueiscasa/:id", AlugueisCasaController.pegaUmCasa);
app.get("/alugueiscasa/quarto/:id", AlugueisCasaController.pegaUmQuarto);
app.post("/alugueiscasa", AlugueisCasaController.criaUmCasa);
app.put("/alugueiscasa/:id", AlugueisCasaController.atualizaUmCasa);
app.delete("/alugueiscasa/:id", AlugueisCasaController.deletaUmCasa);

module.exports = app;
