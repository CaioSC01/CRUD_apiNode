const dbConnection = require("../config/dbConnect.js");

const listarTarefas = async () => {
    const tarefas = await dbConnection.execute("SELECT * FROM tarefas");
    return tarefas;
};

module.exports = {
    listarTarefas,
};
