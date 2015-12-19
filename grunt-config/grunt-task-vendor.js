module.exports = function (grunt) {
	grunt.config.merge({
		bower_concat: {
			vendor: {
				mainFiles: {
					'bootstrap': ['dist/css/bootstrap.css', 'dist/js/bootstrap.js']
				},
				dest: 'dist/js/vendor.js',
				cssDest: 'dist/css/vendor.css',
				callback: function (mainFiles) {
					return mainFiles.map(function (filepath) {
						// Use minified files if available
						var minFilepath = filepath.replace(/\.(js|css)$/, '.min.$1');
						return grunt.file.exists(minFilepath) ? minFilepath : filepath;
					});
				}
			}
		},
		copy: {
			fonts: {
				files: [{
					expand: true,
					cwd: 'bower_components/bootstrap/fonts',
					src: ['*.*'],
					dest: 'dist/fonts'
				}]
			}
		}
	});

	grunt.registerTask('vendor', ['bower_concat', 'copy:fonts']);
};
