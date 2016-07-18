
var casper = require("casper").create({
	verbose: true,
	logLevel: "debug"
});
var hoge = require("hoge.json");
var utils = require('utils');
var hoge_obj = require('./hoge.json');

casper.start("about:blank");

utils.dump(hoge);
casper.echo(hoge);
casper.echo(hoge["hoge"]);
casper.echo(hoge.hoge);
casper.echo(hoge_obj.hoge);

casper.run();

