const routes = require("express").Router();
const Tcontroller = require("../controller/TaskController")

routes.get("/home", Tcontroller.getAll);



module.exports = routes