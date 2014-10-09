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
  res.render('beers/list', {title: 'Listagem de cervejas', beers: msg});
};

router.get('/', function(req, res) {
  Controller.retrieve(req, res, callback);
});


module.exports = router;
