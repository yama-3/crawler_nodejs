var md5hash = require("../md5hash");
var chai = require('chai');
var should = chai.should();

// http://qiita.com/TsutomuNakamura/items/0eb50bf7622a3906e101

describe('md5hash', function() {
  describe('#md5hex', function() {
    it('should return 0cc175b9c0f1b6a831c399e269772661 when the str is a', function() {
      md5hash.md5hex('a').should.equal('0cc175b9c0f1b6a831c399e269772661');
    });
    it('should return 92eb5ffee6ae2fec3ad71c777531578f when the str is b', function() {
      md5hash.md5hex('b').should.equal('92eb5ffee6ae2fec3ad71c777531578f');
    });
    it('should return 4a8a08f09d37b73795649038408b5f33 when the str is c', function() {
      md5hash.md5hex('c').should.equal('4a8a08f09d37b73795649038408b5f33');
    });
  });
});