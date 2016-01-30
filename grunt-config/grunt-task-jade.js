module.exports = function (grunt) {
	grunt.config.merge({
		jade: {
			options: {
				pretty: false,
			},
			indexPage: {
				files: [{
					src: 'src/index-page.jade',
					dest: 'index.html'
				}]
			}
		}
	});
};
