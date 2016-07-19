var casper = require("casper").create({
	verbose: true,
	logLevel: "debug"
    });

var url = casper.cli.get("url");

casper.start(url, function() {
    this.viewport(1024, 768);
    this.capture("page.png");
});

casper.run();