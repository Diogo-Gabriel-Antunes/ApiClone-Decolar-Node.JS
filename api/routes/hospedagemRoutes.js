const { Router } = require("express");
const HospedagemController = require("../controllers/HospedagemController");

const app = Router();

app.get("/hospedagem", HospedagemController.pegaTodasHospedagem);
app.get("/hospedagem/:id", HospedagemController.pegaUmaHospedagem);
app.get("/hospedagem/quarto/:id", HospedagemController.pegaUmQuarto);
app.post("/hospedagem", HospedagemController.criaUmaHospedagem);
app.put("/hospedagem/:id", HospedagemController.atualizaUmaHospedagem);
app.delete("/hospedagem/:id", HospedagemController.deletaUmaHospedagem);

module.exports = app;
