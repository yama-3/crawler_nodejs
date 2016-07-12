
var casper = require("casper").create();
var url = casper.cli.get("url");

function f1() {
    var elements = document.querySelectorAll("li");
    return Array.prototype.map.call(elements, function(e) {
	return e.textContent;
    });
}

function f2() {
    var element = document.querySelector("strong");
    return element.textContent;
}

casper.start(url, function() {
    this.echo(this.getTitle());
});

casper.then(function() {
    var list = this.evaluate(f1);
    this.echo(list);
});

casper.then(function() {
    var text = this.evaluate(f2);
    this.echo(text);
});

casper.run();

