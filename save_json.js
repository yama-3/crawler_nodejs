
var casper = require("casper").create({
	verbose: true,
	logLevel: "debug"
    });
var fs = require("fs");

var data = {
    hoge: 100,
    foo: 'a',
    bar: true,
};

fs.write('hoge.json', JSON.stringify(data, null, '    '), 'w');

casper.start("about:blank");

casper.run();

