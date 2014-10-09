var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

// passando a variável :id para nossa rota
router.get('/:id', function(req, res) {
  Controller.show(req, res);
});

module.exports = router;
