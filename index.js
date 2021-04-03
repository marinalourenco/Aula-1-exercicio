const express = require('express')
const app = express()

// string
const nome = "marina";
const nome2 = 'marina';
const nome3 = `marina`;

// number
const idade = 29;

// array
const condominios = ["quintas das praças", "quintas das pontes", "quintas das ruas"];
const praças = [1,2,3,4,5,6];
const filhosDeEdna = [{nome: "sergio", idade: 100}, {nome:"carlos", idade: 99}, {nome:"filipe", idade: 30}]

//objetos
const caneta = {
    corDaTinta: "azul",
    modelo: "bic",
    quantidade: 100,
}

//função
const soma = function (){
    const a =1;
    const b = 2;
    return a + b;
}

// Rotas de acesso a api
app.get('/', function (req, res) {
    res.json({json: 'Olá, mundo! Estou aprendendo NodeJS'})
})

app.get('/caneta', function (req, res) {
       res.json(caneta)
})

app.listen(3000)