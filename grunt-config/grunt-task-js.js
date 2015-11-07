module.exports = function(grunt) {
	grunt.config.merge({
		copy: {
			mixSrcAndTest: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.js'],
					dest: 'temp/test'
				}, {
					expand: true,
					cwd: 'test',
					src: ['**/*.js'],
					dest: 'temp/test'
				}]
			}
		},
		browserify: {
			options: {
				transform: [
					['babelify', {stage: 0, optional: ['runtime']}]
				]
			},
			sources: {
				src: 'src/**/*.js',
				dest: 'dist/js/index.js'
			},
			testSources: {
				src: ['temp/test/**/*.js'],
				dest: 'dist/test/js/test.js'
			}
		}
	});

	grunt.registerTask('js', ['copy:mixSrcAndTest', 'browserify']);
};
