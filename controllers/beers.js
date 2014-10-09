var Beer = require('../models/beer');

var _beer = {
  create: function(req, res) {

    // recebendo os dados do POST
    var dados = req.body;

    var model = new Beer(dados),
      msg = '';

    model.save(function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }
      else{
        msg = data;
        console.log('Cerveja Inserida: ', data);
      }
      res.json(msg);
    });

  },
  retrieve: function(req, res) {
    Beer.find({}, function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }else{
        msg = data;
        console.log('Listagem: ', data);
      }
      res.json(msg);
    });

  },
  show: function(req, res) {
    var query = {_id: req.params.id};
    Beer.findOne(query, function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }else{
        msg = data;
        console.log('Listagem: ', data);
      }
      res.json(msg);
    });

  },
  update: function(req, res) {
    var query = {_id: req.params.id};
    var mod = req.body;
    var optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }
      else{
        msg = data;
        console.log('Cervejas atualizadas com sucesso', data);
      }
      res.json(msg);
    });

  },
  delete: function(req, res) {
    var query = {_id: req.params.id};

    Beer.remove(query, function(err, data) {
      if(err) {
        msg = 'Erro: ' + err;
        console.log(err);
      } else {
        msg = data;
        console.log('Cerveja deletada com sucesso, quantidade: ', data);
      }
      res.json(msg);
    });

  },
};

module.exports = _beer;

