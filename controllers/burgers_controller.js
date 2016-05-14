var express = require('express');
var router = express.Router();
var burger = require('../model/burger.js');

router.get('/', function(req,res){
	res.redirect('/index')
});

router.get('/index', function(req,res){
	burger.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index',hbsObject);
	});
});

router.post('/index/create', function(req,res){
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.put('/index/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;