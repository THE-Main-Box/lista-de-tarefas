const express = require('express');
const app = express();



const door = 3000;
app.listen(door,()=>{
    console.log(`Conectado com Sucesso na Porta:${door}`);
})