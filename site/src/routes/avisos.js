var express = require("express");
var router = express.Router();

<<<<<<< HEAD
var avisoController = require("../controllers/batalhaController");

router.get("/", function (req, res) {
    batalhaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    batalhaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    batalhaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    batalhaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    batalhaController.publicar(req, res);
});

router.put("/editar/:idBatalha", function (req, res) {
    batalhaController.editar(req, res);
});

router.delete("/deletar/:idBatalha", function (req, res) {
    batalhaController.deletar(req, res);
=======
var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
>>>>>>> 78850a6478b7fdcf211d20bcd34d73f0cda7c687
});

module.exports = router;