var Spooky = require('spooky');
var cheerio = require('cheerio');

var spooky = new Spooky({
	child: {
	    transport: 'http'
	},
	casper: {
	    logLevel: 'debug',
	    verbose: true
	}
},
			
    function (err) {
	if (err) {
	    e = new Error('Failed to initialize SpookyJS');
	    e.details = err;
	    throw e;
	}

	spooky.start('http://cs.crosswarp.com/wf/hoge/test/DomPage');
	
	spooky.then(function() {
	    var innerHtml = this.evaluate(function() {
		return document.querySelector('div#content2').innerHTML;
	    });
	    this.emit('target', innerHtml);
	    });

	spooky.run();
    });

spooky.on('target', function(innerHtml) {
    console.log(innerHtml)
    $ = cheerio.load(innerHtml);
    $('li').each(function(i, elm) {
	console.log($(this).text());
    });
});

/*
spooky.on('console', function (line) {
    console.log(line);
});
*/
