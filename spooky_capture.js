var Spooky = require('spooky');

var spookyCapture = {
    url: 'about:blank',
    elementSelector: '',
    imageFile: 'spookyCapture.png'
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

    spooky.once('capture', captureFunc);
    spooky.on('log', function(log) { if (log.space === 'remote') { console.log(line); } });
    spooky.on('console', function (line) { console.log(line); });

    console.log(spookyCapture.url);
    console.log(spookyCapture.elementSelector);
    console.log(spookyCapture.imageFile);

    spooky.start(spookyCapture.url);
    var param = {
	imageFile: spookyCapture.imageFile,
	elementSelector: spookyCapture.elementSelector, 
	viewport_width: 1024,
	viewport_height: 1280
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
