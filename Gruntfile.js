module.exports = function (grunt) {
  "use strict";

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 3000,
          base: 'app',
          hostname: ''
        }
      }
    },

    open : {
      dev : {
        path: 'http://127.0.0.1:3000'
      }
    },

    watch: {
      livereload: {
        files: [
          'app/**/*.*'
        ],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('default', ['connect', 'open:dev', 'watch'])
}