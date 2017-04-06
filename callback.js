var fs = require('fs');

fs.readFile('README.md', function (err, data) {
	if(err) return console.error(err);
	console.log(data.toString());
})

console.log('Program ended');