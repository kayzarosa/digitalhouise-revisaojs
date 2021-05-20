var express = require('express');

var app = express();

app.use(express.json());

app.get('/', (request, response) => {

});

app.get('/:id', (request, response) => {

});

app.get('/busca/:nome', (request, response) => {

});

app.listen('3000', () => {
  console.log('Servidor iniciado!');
});
