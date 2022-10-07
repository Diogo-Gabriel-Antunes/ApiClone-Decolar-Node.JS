const {Router} = require('express')
const ViagensController = require('../controllers/ViagensController')

const app = Router()


app.get('/viagens',ViagensController.pegaTodasViagens)
app.get('/viagem/:id',ViagensController.pegaUmaViagem)
app.get('/viagens/relatorio',ViagensController.relatorioPorMes)
app.post('/viagens',ViagensController.criaUmaViagem)
app.put('/viagens/:id',ViagensController.atualizaUmaViagem)
app.delete('/viagens/:id',ViagensController.deletaUmaViagem)

module.exports = app