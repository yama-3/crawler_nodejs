var crypto = require("crypto");

exports.md5hex = function(str) {
    var md5hash = crypto.createHash("md5");
    md5hash.update(str, 'binary');
    return md5hash.digest('hex');
}
