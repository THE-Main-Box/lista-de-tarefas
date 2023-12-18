const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null, taskDelete: null });
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const createTask = async (req, res) => {
  try {
    const task = req.body;
    req.body.edited = false;
    req.body.check = false;

    if (!task.task) {
      return res.redirect("/");
    }

    await Task.create(task);
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
      res.render("index", { task, taskList, taskDelete: null });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskList, taskDelete });
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

    await Task.updateOne({ _id: req.params.id }, task);

    res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.status(500).send("ERRO no Servidor, Tente Novamente Mais Tarde :(");
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getByID,
  updateTask,
  deleteTask,
};
