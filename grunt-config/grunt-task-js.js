module.exports = function (grunt) {
	grunt.config.merge({
		browserify: {
			options: {
				transform: [
					['babelify', {
						stage: 0,
						optional: ['runtime']
					}]
				]
			},
			sources: {
				src: 'src/**/*.js',
				dest: 'dist/js/index.js'
			},
			testSources: {
				src: ['test/**/*.js', 'src/**/*.js'],
				dest: 'dist/test/test.js'
			}
		}
	});

	grunt.registerTask('js', ['browserify:sources', 'browserify:testSources']);
};
