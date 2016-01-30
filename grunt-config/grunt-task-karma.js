module.exports = function(grunt) {
	grunt.config.merge({
		karma: {
			options: {
				basePath: '',
				frameworks: ['mocha', 'chai-as-promised', 'chai-spies', 'chai'],
				files: [
					'dist/js/vendor.js',
					'dist/js/index.js',
					'dist/test/test.js'
				],
				reporters: ['mocha'],
				port: 9876,
				colors: true,
				logLevel: 'INFO',
				browsers: ['Chrome'],
				concurrency: Infinity
			},
			continuous: {
				autoWatch: true,
				singleRun: false
			},
			dev: {
				autoWatch: false,
				singleRun: true,
			}
		}
	});
};
