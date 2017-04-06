var http = require('http');

var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
};

var callback = function (response) {
	var body = '';
	response.on('data', function(data) {
		body += data;
	});
}

var req = http.request(options, callback);
req.end();