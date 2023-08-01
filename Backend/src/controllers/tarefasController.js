const tarefas = require("../models/tarefas.js");

const listarTarefas = async (req, res) => {
    const tarefa = await tarefas.listarTarefas();

    return res
        .status(200)
        .json({ message: "Controller de tarefas esta funcionando" });
};

module.exports = { listarTarefas };
