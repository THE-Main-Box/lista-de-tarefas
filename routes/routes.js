const routes = require("express").Router();
const Tcontroller = require("../controller/TaskController")

routes.get("/", Tcontroller.getAllTasks);

routes.post("/cr", Tcontroller.createTask)

module.exports = routes