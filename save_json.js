
var casper = require("casper").create();
var fs = require("fs");

var data = {
    hoge: 100,
    foo: 'a',
    bar: true,
};

fs.write('hoge.json', JSON.stringify(data, null, '    '), 'w');

casper.start();

casper.run(function() {
    this.exit(0);
});


