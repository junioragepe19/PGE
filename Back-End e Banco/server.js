var express = require('express')
var http = require('http')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200);
    }

    next();
})
http.createServer(app).listen(8080)

console.log("Rodando servidor na porta 8080")

app.post("/login", function (req, res) {
  console.log(req.body)
  res.status(200).send(req.body)
});

app.post("/cadastrar"/*, verificarNivel(3) */, function (req, res) { //O usuario deveria ter um nivel maior que o normal para cadastrar um outro
    console.log(req.body)
    res.status(200).send(req.body)
  });

