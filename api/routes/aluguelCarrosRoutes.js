const {Router} = require('express')
const AluguelCarrosController = require('../controllers/AluguelDeCarrosController')

const app = Router()


app.get('/carros',AluguelCarrosController.pegaTodosCarros)
app.get('/carros/:id',AluguelCarrosController.pegaUmCarro)
app.post('/carros',AluguelCarrosController.criaUmCarro)
app.put('/carros/:id',AluguelCarrosController.atualizaUmCarro)
app.delete('/carros/:id',AluguelCarrosController.deletaUmCarro)

module.exports = app