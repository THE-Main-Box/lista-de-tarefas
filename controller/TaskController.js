const Task = require("../models/task");

let message = "";
let type = "";


const getAllTasks = async (req, res) => {
  try {
    if(message != ""){
      setTimeout(()=>{
        message = ""
        type = ""
      },5000)
    }

    const taskList = await Task.find();

    return res.render("index", {
      taskList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const createTask = async (req, res) => {
  try {
    const task = req.body;

    if (!task.task) {
      message = "Insira uma Tarefa Antes de Tentar Criar uma...";
      type = "warning";
      return res.redirect("/");
    }

    await Task.create(task);
    message = "Tarefa Criada com Sucesso!";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
    console.log(err);
  }
};

const getByID = async (req, res) => {
  try {
    const taskList = await Task.find();

    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskList, taskDelete: null, message, type });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskList, taskDelete, message, type });
    }
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
    console.log(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;
    req.body.edited = true;

    message = "Tarefa Atualizada!"
    type = "success"

      await Task.updateOne({ _id: req.params.id }, task);

    res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });

    message = "Tarefa DELETADA"
    type = "success"

    res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const checkTask = async (req, res) =>{
  try{
    const task = await Task.findOne({_id: req.params.id});

    if(task.check){
      task.check = false
    }else{
      task.check = true
      message = "Tarefa Concluída"
      type = "success"
    }

    await Task.updateOne({_id: req.params.id}, task)

    res.redirect("/")
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }

}

module.exports = {
  getAllTasks,
  createTask,
  getByID,
  updateTask,
  deleteTask,
  checkTask
};
