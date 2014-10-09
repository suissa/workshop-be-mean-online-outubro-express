var express = require('express');
var router = express.Router();
var Controller = require('./../controllers/beers');

var callback = function(err, data, res){
  if (err){
    msg = 'Erro: ' + err;
    console.log('Erro: ', err);
  }
  else{
    msg = data;
    console.log('Cerveja Inserida: ', data);
  }
  res.render(res.view, {title: 'Listagem de cervejas', beers: msg});
};

router.get('/', function(req, res) {
  res.view = 'beers/list';
  Controller.retrieve(req, res, callback);
});

// Caso eu crie depois da rota com a variável :id
// Todas as rotas vão cair nela pois ela espera qualquer coisa
// Por isso precisamos setar as rotas estáticas antes
router.get('/create', function(req, res) {
  res.view = 'beers/create';
  res.render(res.view, {title: 'Cadastro de cerveja'});
});

router.get('/:id', function(req, res) {
  res.view = 'beers/show';
  Controller.show(req, res, callback);
});

router.get('/:id/edit', function(req, res) {
  res.view = 'beers/edit';
  Controller.show(req, res, callback);
});

module.exports = router;
