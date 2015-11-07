module.exports = function(grunt) {
	grunt.config.merge({
		jshint: {
			options: {
				esnext: true, curly: true, eqeqeq: true,
				immed: true, latedef: false, newcap: true,
				noarg: true, sub: true, undef: true,
				unused: true, boss: true, eqnull: true,
				browser: true,
				globals: {
					module: true, require: true,
					$: true, jQuery: true, _: true, qr: true, qrcode: true,      // vendor
					console: true,
					chai: true, describe: true, it: true, beforeEach: true,      // BDD
					Vue: true
				}
			},
			all: {
				src: ['src/**/*.js', 'test/**/*.js']
			}
		}
	});
};
