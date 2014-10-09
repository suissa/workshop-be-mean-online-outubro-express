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

router.get('/:id', function(req, res) {
  res.view = 'beers/show';
  Controller.show(req, res, callback);
});

module.exports = router;
