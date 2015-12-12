module.exports = function(grunt) {
	grunt.config.merge({
		less: {
			all: {
				src: 'src/**/*.less',
				dest: 'dist/css/index.css'
			}
		}
	});
};
