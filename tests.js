var reallyLoadJSON = require('./index');

var validFile = 'package.json';
var invalidFile = 'index.js';
var missingFile = 'thisdoesntactuallyexist.json';

module.exports = {

	itLoadsAValidFileSync: function(test) {

		test.expect(1);
		
		var data = reallyLoadJSON.sync(validFile);
		test.ok(Object.keys(data).length > 0);
		test.done();

	},

	itLoadsAValidFileAsync: function(test) {

		test.expect(1);
		
		reallyLoadJSON.async(validFile, function(err, data) {
			test.ok(Object.keys(data).length > 0);
			test.done();
		});
		
	},

	itThrowsOnInvalidFileSync: function(test) {

		test.expect(1);
		
		test.throws(function() {
			reallyLoadJSON.sync(invalidFile);
		});
		
		test.done();

	},

	// I might not be doing things right but I can't figure
	// how to make this 'throw' when we hand over a callback to fs.readFile
	// So no 'throws' when asyncing, the err will come in the callback
	itErrsOnInvalidFileAsync: function(test) {

		test.expect(1);
		
		reallyLoadJSON.async(invalidFile, function(err, data) {
			test.ok(err !== null);
			test.done();
		});
		


	},

	itThrowsOnMissingFileSync: function(test) {

		test.expect(1);
		
		test.throws(function() {
			reallyLoadJSON.sync(missingFile);
		});
		
		test.done();

	},

	itErrsOnMissingFileAsync: function(test) {

		test.expect(1);
		
		reallyLoadJSON.async(missingFile, function(err, data) {
			test.ok(err !== null);
			test.done();
		});

	}

};
