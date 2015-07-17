# really-load-json

> Load and parse a JSON file, either sync or async

## Usage

```javascript
var reallyLoadJSON = require('really-load-json');

// Load this module's package.json to demo
var packageData = reallyLoadJSON.sync('package.json');
console.log('This module name is', packageData.name);

// Or async
reallyLoadJSON.async('package.json', function(err, packageData) {
	console.log('(async) This module name is', packageData.name);
});

```

Have a look at `example.js`.

## Tests

Tests are in `tests.js` and built with nodeunit. Run `npm test` to run the tests.

