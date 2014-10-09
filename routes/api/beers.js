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

// POST /api/beers
router.post('/', function(req, res) {
  Controller.create(req, res);
});

// Altero a cerveja
router.put('/:id', function(req, res) {
  Controller.update(req, res);
});

// Deleto a cerveja
router.delete('/:id', function(req, res) {
  Controller.delete(req, res);
});


module.exports = router;
