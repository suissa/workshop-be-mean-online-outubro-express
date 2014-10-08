var Beer = require('../models/beer');

var _beer = {
  create: function(req, res) {

    var dados = {
      name: 'Heineken',
      description: 'Até q eh boazinha',
      alcohol: 5.5,
      price: 3.5,
      category: 'lager'
    }

    var model = new Beer(dados),
      msg = '';

    model.save(function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }
      else{
        msg = 'Cerveja Inserida: ' + data;
        console.log('Cerveja Inserida: ', data);
      }
      res.end(msg);
    });

  },
  retrieve: function(req, res) {
    Beer.find({}, function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }else{
        msg = 'Listagem: ' + data;
        console.log('Listagem: ', data);
      }
      res.end(msg);
    });

  },
  update: function(req, res) {
    var query = {name: 'Heineken'};
    var mod = {alcohol: 80};
    var optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, optional, function (err, data) {
      if (err){
        msg = 'Erro: ' + err;
        console.log('Erro: ', err);
      }
      else{
        msg = 'Cervejas atualizadas com sucesso: ' + data;
        console.log('Cervejas atualizadas com sucesso', data);
      }
      res.end(msg);
    });

  },
  delete: function(req, res) {
    var query = {name: 'Heineken'};

    Beer.remove(query, function(err, data) {
      if(err) {
        msg = 'Erro: ' + err;
        console.log(err);
      } else {
        msg = 'Cervejas deletadas com sucesso: ' + data;
        console.log('Cerveja deletada com sucesso, quantidade: ', data);
      }
      res.end(msg);
    });

  },
};

module.exports = _beer;

