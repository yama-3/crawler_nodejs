
var casper = require("casper").create();
var hoge = require("hoge.json");
var utils = require('utils');
var hoge_obj = require('./hoge.json');

utils.dump(hoge);
casper.echo(hoge);
casper.echo(hoge["hoge"]);
casper.echo(hoge.hoge);
casper.echo(hoge_obj.hoge);

casper.exit();
