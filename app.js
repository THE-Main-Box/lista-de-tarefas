// requires
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const conectDB = require("./database/db");

conectDB();

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

// porta de entrada
app.listen(port, () => console.log(`Conectado com Sucesso na Porta:${port}`));
