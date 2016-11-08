var express = require('express');
var router = express.Router();
var path = require('path');
//var sleep = require('sleep-async')();
var sleep = require('sleep');
var fs = require('fs');
var md5hash = require('../md5hash');
var spookyCapture = require("../spooky_capture");

/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(req);

	//res.render('index', { title: 'Express', message: "Hoge" });
	//res.json({'a': 1, 'b': 2.0});
	
	res.sendFile(path.resolve('./sagan.jpeg'));
});

// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{"url": "http://www.yahoo.co.jp","selector": "#topicsbox"}' "http://localhost:3333"
router.post('/', function(req, res) {
    console.log(req.body);
    var requestedAt = new Date();
    var url = req.body['url'];
    var selector = req.body['selector'];
    var filename = './images/' + md5hash.md5hex(url + selector + requestedAt) + '.png';
	
    try {
	fs.unlinkSync(filename);
    } catch (e){
	console.log(e);
    }

    spookyCapture.run(url, selector, filename);

    fs.watchFile(filename, (curr, prev) => {
	if (curr.mtime > prev.mtime) {
	    res.sendFile(path.resolve(filename));
	    fs.unwatchFile(filename);
	}
    });

});

module.exports = router;
