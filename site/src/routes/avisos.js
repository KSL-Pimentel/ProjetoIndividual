var express = require("express");
var router = express.Router();

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
});

module.exports = router;