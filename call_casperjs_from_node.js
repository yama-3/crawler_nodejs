var Spooky = require('spooky');

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

	spooky.start('http://www.crosswarp.com/');
	spooky.then(function() {
		this.capture('cw.png');
	    });
	spooky.run(function() {
		this.exit()
	    });
    });
