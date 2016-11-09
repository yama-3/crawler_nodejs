var Spooky = require('spooky');

var spookyCapture = {
    url: 'about:blank',
    elementSelector: '',
    imageFile: 'spookyCapture.png',
    viewportWidth: 1024,
    viewportHeight: 1280
};

var captureFunc = function() {
    if (!spookyCapture.selector) {
	console.log("capture: " + spookyCapture.imageFile);
	this.capture(spookyCapture.imageFile);
    } else {
	console.log("captureSelector: " + spookyCapture.imageFile);
	this.captureSelector(spookyCapture.imageFile, spookyCapture.selector);
    }
};

var callback = function (err) {
    if (err) {
	e = new Error('Failed to initialize SpookyJS');
	e.details = err;
	throw e;
    }

    spooky.userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0 Mobile/14B72 Safari/602.1");

    spooky.once('capture', captureFunc);
    spooky.on('log', function(log) { if (log.space === 'remote') { console.log(line); } });
    spooky.on('console', function (line) { console.log(line); });

    spooky.start(spookyCapture.url);
    var param = {
	imageFile: spookyCapture.imageFile,
	elementSelector: spookyCapture.elementSelector, 
	viewport_width: spookyCapture.viewportWidth,
	viewport_height: spookyCapture.viewportHeight
    };
    spooky.then([param, function() {
	if (!elementSelector) {
	    this.viewport(viewport_width, viewport_height);
	    this.capture(imageFile);
	} else {
	    this.captureSelector(imageFile, elementSelector);
	}
    }]);
    spooky.run();
};

spookyCapture.run = function(url, elementSelector, imageFile) {
    spookyCapture.url = url;
    spookyCapture.elementSelector = elementSelector;
    spookyCapture.imageFile = imageFile;
    spooky = new Spooky(
	{
	    child: { transport: 'http' },
	    casper: { logLevel: 'debug', verbose: true }
	},
	callback
    );
};

module.exports = spookyCapture;
