const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", {tasks: taskList});
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
    console.log(err);
  }
};

module.exports = { getAllTasks, createTask };
