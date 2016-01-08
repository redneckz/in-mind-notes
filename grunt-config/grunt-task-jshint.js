module.exports = function (grunt) {
	grunt.config.merge({
		jshint: {
			options: {
				esnext: true, curly: true, eqeqeq: true,
				immed: true, latedef: false, newcap: true,
				noarg: true, sub: true, undef: true,
				unused: true, boss: true, eqnull: true,
				browser: true, mocha: true, jquery: true,
				node: true, devel: true,
				globals: {
					_: true, chai: true, Vue: true, "swal": true,
					zxcvbn: true, introJs: true
				}
			},
			all: {
				src: ['src/**/*.js', 'test/**/*.js']
			}
		}
	});
};
