Para criarmos uma API REST, iremos utilizar 4 verbos do protocolo HTTP para acessar nossas funcionalidades do CRUD do mongoose. Quais são eles?

GET - busca entidaees - find
POST - cria uma entidade - insert/save
PUT - altera entidades - update
DELETE - deleta entidades - remove

Como vamos utilizar um verbo para cada ação, podemos ter uma mesmo rota para mais de uma verbo, vamos ver nesse exemplo:

> GET /api/beers

Irá me listar todas as cervejas

> POST /api/beers

Irá criar uma cerveja nova


###Refatorando

Vamos criar uma função de callback na rota para que ela responda da melhor forma, porém para isso precisaremos passar o callback como parametro das nossas funções do Controller.

```
//callback
var callback = function(err, data, res){
  if (err){
    msg = 'Erro: ' + err;
    console.log('Erro: ', err);
  }
  else{
    msg = data;
    console.log('Cerveja Inserida: ', data);
  }
  res.json(msg);
};

router.get('/', function(req, res) {
  Controller.retrieve(req, res, callback);
});

// passando a variável :id para nossa rota
router.get('/:id', function(req, res) {
  Controller.show(req, res, callback);
});

// POST /api/beers
router.post('/', function(req, res) {
  Controller.create(req, res, callback);
});

// Altero a cerveja
router.put('/:id', function(req, res) {
  Controller.update(req, res, callback);
});

// Deleto a cerveja
router.delete('/:id', function(req, res) {
  Controller.delete(req, res, callback);
});
```

Então no nosso Controller precisamos receber esse callback e executá-lo:
```
var _beer = {
  create: function(req, res, callback) {
    // recebendo os dados do POST
    var dados = req.body,
      model = new Beer(dados),
      msg = '';

    model.save(function (err, data) {
      callback(err, data, res);
    });

  },
  retrieve: function(req, res, callback) {
    Beer.find({}, function (err, data) {
      callback(err, data, res);
    });

  },
  show: function(req, res, callback) {
    var query = {_id: req.params.id};
    Beer.findOne(query, function (err, data) {
      callback(err, data, res);
    });

  },
  update: function(req, res, callback) {
    var query = {_id: req.params.id},
      mod = req.body,
      optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, function (err, data) {
      callback(err, data, res);
    });

  },
  delete: function(req, res, callback) {
    var query = {_id: req.params.id};

    Beer.remove(query, function(err, data) {
      callback(err, data, res);
    });

  },
};
```






