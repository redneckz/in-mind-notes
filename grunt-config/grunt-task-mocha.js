module.exports = function(grunt) {
  grunt.config.merge({
    mocha_slimer: {
      test: {
        options: {
          ui: 'bdd',
          reporter: 'Spec',
          run: true,
        },
        src: ['dist/test/test.html']
      }
    }
  });
};
