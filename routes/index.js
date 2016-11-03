var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req);

	//res.render('index', { title: 'Express', message: "Hoge" });
	//res.json({'a': 1, 'b': 2.0});
	
	res.sendFile(path.resolve('./sagan.jpeg'));
});

module.exports = router;
