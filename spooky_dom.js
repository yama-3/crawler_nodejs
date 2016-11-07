var cheerio = require('cheerio');
var spookyOuterhtml = require('./spooky_outerhtml');

var url = process.argv[2];
var elementSelector = process.argv[3];

spookyOuterhtml.htmlFunc = function(html) {
    console.log(html);
    $ = cheerio.load(html);
    $(elementSelector).each(function(i, elm) {
	console.log($(this).html());
	console.log($(this).text());
    });
};

spookyOuterhtml.run(url);
