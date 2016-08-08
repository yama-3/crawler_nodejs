var casper = require("casper").create({
	verbose: true,
	logLevel: "debug"
    });

var url = casper.cli.get("url");

casper.start(url, function() {
    this.viewport(1024, 768);
    this.capture("page.png", {top: 0, left: 0, width: 1024, height: 1000});
});

casper.run();
