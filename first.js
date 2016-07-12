
var casper = require("casper").create();
var url = "";
var list = [];

casper.start(url, function() {
    this.echo(this.getTitle());
});

casper.then(function() {
    list = this.evaluate(function() {
	var elements = document.querySelectorAll("li");
	return Array.prototype.map.call(elements, function(e) {
	    return e.textContent;
	});
    });
});

casper.run(function() {
    this.echo(list.length);
    this.echo(' - ' + list.join('\n - ')).exit();
});

