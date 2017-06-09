/* global describe:false, it:false, before:false, after:false */

/* mocha tests for Niffy go here */
// var express = require('express');
// var exphbs  = require('express-handlebars');
// var path = require('path');

var server = require('./regression/server.js');

// var should = require('chai').should();
var Niffy = require('niffy');

describe('Fuel UX 3', function testFuelUX3 () {
	var basehost = 'http://localhost:8000';
	var testhost = 'http://localhost:8013';
	var niffy;
	var devServer;
	var refServer;

	before(function instantiateNiffy () {
		devServer = server.getServer(8000);
		refServer = server.getServer(8013);
		niffy = new Niffy(basehost, testhost, { show: true, threshold: 0 });
	});
	after(function stopAll () {
		niffy.end();
		devServer.close();
		refServer.close();
	});

	describe('Components', function testComponents () {
		/**
		 * Top level.
		 */
		it('/checkbox', function* testCheckbox () {
			yield niffy.test('/checkbox');
		});
	});
});
