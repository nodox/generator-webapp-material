'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('bootstrap', function () {
  describe('general', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({features: [
          'includeBootstrap'
        ]})
        .on('end', done);
    });

    it('adds the Bootstrap dependency', function () {
      assert.fileContent('bower.json', 'bootstrap');
    });

    it('doesn\'t explicitly add the jQuery dependency', function () {
      assert.noFileContent('bower.json', 'jquery');
    });

    it('adds the HTML description', function () {
      assert.fileContent('app/index.html', 'Bootstrap');
    });
  });

  describe('with Material Theme', function () {

    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({features: [
          'includeSass',
          'includeBootstrap'
        ]})
        .on('end', done);
    });

    it('uses Bootstrap Material Design', function () {
      assert.fileContent('bower.json', '"bootstrap-material-design"');
    });

  });

  describe('without Material Theme', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({features: [
          'includeBootstrap'
        ]})
        .on('end', done);
    });

    it('uses regular Bootstrap', function () {
      assert.fileContent('bower.json', '"bootstrap"');
    });
  });
});
