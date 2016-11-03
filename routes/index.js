var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Express', message: "Hoge" });
	res.json({'a': 1, 'b': 2.0});
});

module.exports = router;
