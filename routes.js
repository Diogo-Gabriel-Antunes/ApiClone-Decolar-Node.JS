const {Router} = require('express')
const viagens = require('./api/routes/viagensRoute')
const hospedagem = require('./api/routes/hospedagemRoutes')
const carros = require('./api/routes/aluguelCarrosRoutes')
const alugueisCasa = require('./api/routes/AlugueisCasaRoute')
const atracoes = require('./api/routes/atracoesRoute')
const usuarios = require('./api/routes/UsuariosRoute')

const app = Router()

app.use(viagens,hospedagem,carros,alugueisCasa,atracoes,usuarios)




module.exports = app