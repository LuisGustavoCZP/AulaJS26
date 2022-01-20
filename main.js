const express = require('express');
const port = 8000;
const app = express();

const database = require('./database.js');
const births = require('./modules/births.js');
const sectors = require('./modules/sectors.js');
const ramals = require('./modules/ramals.js');

database.CreateRandom(10);

app.use(express.static(__dirname+"/www"));
app.get('/bybirthmount', function(req, res){
    res.send(births.ByMount(parseInt(req.query["n"])));
});
app.get('/bysector', function(req, res){
    res.send(sectors.BySector(parseInt(req.query["n"])));
});
app.get('/ramals', function(req, res){
    res.send(ramals.InOrder());
});

app.listen(port, () => {`Iniciado servidor na porta ${port}`});