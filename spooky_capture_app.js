var spookyCapture = require('./spooky_capture');

var url = process.argv[2];
var selector = process.argv[3];
var file = process.argv[4];

spookyCapture.run(url, selector, file);
