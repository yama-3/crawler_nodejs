var Spooky = require('spooky');

var spookyOuterhtml = {
    url: 'about:blank'
};

var callback = function (err) {
    if (err) {
	e = new Error('Failed to initialize SpookyJS');
	e.details = err;
	throw e;
    }
	
    spooky.on('html', spookyOuterhtml.htmlFunc);
    spooky.on('log', function(log) {
	if (log.space === 'remote') {
	    console.log(line);
	}
    });
    spooky.on('console', function (line) {
	console.log(line);
    });

    spooky.start(spookyOuterhtml.url);
    spooky.then(function() {
	var html = this.evaluate(function() {
	    return document.documentElement.outerHTML;
	});
	this.emit('html', html);
    });
    spooky.run();
};

spookyOuterhtml.run = function(url) {
    spookyOuterhtml.url = url;
    spooky = new Spooky(
	{
	    child: { transport: 'http' },
	    casper: { logLevel: 'debug', verbose: true }
	},
	callback
    );
};

module.exports = spookyOuterhtml;
