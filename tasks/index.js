module.exports = function (gulp, plugins, vars) {
	return function () {

		var d = plugins.q.defer();
		var fs = require('fs');

		var html = '<!doctype html>' + "\r" +
		'<html>' + "\r" +
		'<head>' + "\r" +
		"\t" + '<meta charset="utf-8">' + "\r" +
		"\t" + '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + "\r" +
		"\t" + '<meta name="description" content="">' + "\r" +
		"\t" + '<meta name="viewport" content="width=device-width">' + "\r" +
		"\t" + '<link rel="icon" type="image/png" href="./favicon.png">' + "\r" +
		"\t" + '<link rel="stylesheet" href="/dist/css/' + vars.appName + '_vendor.min.css">' + "\r" +
		"\t" + '<link rel="stylesheet" href="/dist/css/' + vars.appName + '.min.css">' + "\r" +
		"\t" + '<script src="/dist/js/' + vars.appName + '_vendor.min.js"></script>' + "\r" +
		"\t" + '<script data-main="main" src="/dist/js/require.js"></script>' + "\r" +
		"\t" + '<base href="/" />' + "\r" +
		'</head>' + "\r" +
		'<body>' + "\r" +
		"\t" + '<div ui-view></div>' + "\r" +
		'</body>' + "\r" +
		'</html>';

		fs.writeFile('./index.html', html, function() {
			d.resolve(true);
		});

		return d.promise;
	};
};
