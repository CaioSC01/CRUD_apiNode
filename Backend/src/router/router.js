const express = require("express");
const tarefasController = require("../controllers/tarefasController.js");

const router = express.Router();

router.get("/tarefas", tarefasController.listarTarefas);

module.exports = router;
