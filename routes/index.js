var express = require('express');
var router = express.Router();
var xml = require('xml');
var sleep = require('sleep');
var counter_claro = 0;
var counter_movistar = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  // console.log(req.headers);
  console.log(req.body);
  // numeros = req.body;
  // console.log("Numeros >", numeros.Digits);
  res.sendStatus(200);
});

router.get('/claro', function(req, res, next) {
  console.log("Claro: " + counter_claro++)
  sleep.msleep(200);

  res.render('index', { title: 'Express' });
});

router.get('/movistar', function(req, res, next) {
  console.log("Movistar: " + counter_movistar++)
  sleep.msleep(200);
  res.set('Content-Type', 'text/xml');
  res.send(xml([ { response: [ { status: 'ok' } , { message: 'Enviado de mensaje por webservice exitoso.' } ] }], { declaration: true }));
});
module.exports = router;
