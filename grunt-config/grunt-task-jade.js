module.exports = function (grunt) {
	grunt.config.merge({
		jade: {
			options: {
				pretty: true,
			},
			indexPage: {
				files: [{
					src: 'src/index-page.jade',
					dest: 'index.html'
				}]
			},
			testPage: {
				files: [{
					src: 'test/test-page.jade',
					dest: 'dist/test/test.html'
				}]
			}
		}
	});
};
