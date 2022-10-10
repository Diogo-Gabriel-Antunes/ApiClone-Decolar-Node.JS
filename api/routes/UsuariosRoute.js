const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const middlewareRefreshToken = require("../middleware/middleware-Refresh-Token");

const app = Router();

app.get("/usuarios", UsuarioController.pegaTodosUsuarios);
app.get("/usuarios/:id", UsuarioController.pegaUmusuario);
app.post("/usuarios/autenticado", UsuarioController.verificaAuthenticacao);
app.post("/usuarios", UsuarioController.criaUmusuario);
app.post("/usuarios/login", UsuarioController.LoginDoUsuario);

app.post("/usuarios/logout", UsuarioController.Logout);
app.put("/usuarios/:id", UsuarioController.atualizaUmusuario);
app.delete("/usuarios/:id", UsuarioController.deletaUmusuario);

module.exports = app;
