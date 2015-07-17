var reallyLoadJSON = require('./');

var validFile = 'package.json';
var invalidFile = 'index.js';

// Load this module's package.json to demo
var packageData = reallyLoadJSON.sync('package.json');
console.log('This module name is', packageData.name);

// Or async
// Load this module's package.json to demo
reallyLoadJSON.async('package.json', function(err, packageData) {
	console.log('(async) This module name is', packageData.name);
});

// Try to load a file that is not JSON
reallyLoadJSON.async(invalidFile, function(err, data) {
	console.log('result', err);
});
