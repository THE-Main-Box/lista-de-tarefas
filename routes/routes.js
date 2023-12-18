const routes = require("express").Router();
const Tcontroller = require("../controller/TaskController");

routes.get("/", Tcontroller.getAllTasks);

routes.post("/cr", Tcontroller.createTask);

routes.get("/getID/:id/:method", Tcontroller.getByID);

routes.post("/update/:id", Tcontroller.updateTask);

routes.get("/deleteTask/:id", Tcontroller.deleteTask)

module.exports = routes;
