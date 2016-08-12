var Spooky = require('spooky');
var cheerio = require('cheerio');

var URL = 'http://cs.crosswarp.com/wf/hoge/test/DomPage';
var elementSelector = '#content2 li';

var htmlFunc = function(html) {
    console.log(html)
    $ = cheerio.load(html);
    $(elementSelector).each(function(i, elm) {
	console.log($(this).text());
    });
};

var spookyCallback = function (err) {
    if (err) {
	e = new Error('Failed to initialize SpookyJS');
	e.details = err;
	throw e;
    }
	
    spooky.on('html', htmlFunc);
    spooky.on('log', function(log) {
	if (log.space === 'remote') {
	    console.log(line);
	}
    });
    spooky.on('console', function (line) {
	console.log(line);
    });

    spooky.start(URL);
    spooky.then(function() {
	var html = this.evaluate(function() {
	    return document.documentElement.outerHTML;
	});
	this.emit('html', html);
    });
    spooky.then(function() {
	this.capture('hoge1.png');
	this.captureSelector('hoge2.png', '#content2')
    });
    spooky.run();

};

var options = {child: { transport: 'http' }, casper: { logLevel: 'debug', verbose: true }}
var spooky = new Spooky(options, spookyCallback);

