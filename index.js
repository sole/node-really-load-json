var fs = require('fs');

function parse(data) {
	return JSON.parse(data);
}

function loadSync(path) {
	var data = fs.readFileSync(path, 'utf-8');
	return parse(data);
}

function loadAsync(path, callback) {
	
	fs.readFile(path, { encoding: 'utf-8' }, function(err, data) {

		if(err) {
			callback(err);
		} else {

			var parsedData;
			try {
				parsedData = parse(data);
				callback(null, parsedData);
			} catch(e) {
				callback(e);
			}

		}
	});
}

module.exports = {
	sync: loadSync,
	async: loadAsync
};

