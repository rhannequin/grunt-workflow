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
      },
      sass: {
        files: [
          'app/assets/styles/sass/**/*.{scss,sass}',
          'app/assets/styles/sass/_partials/**/*.{scss,sass}'
        ],
        tasks: ['sass']
      }
    },

    sass: {
      all: {
        files: {
          'app/assets/styles/styles.css': 'app/assets/styles/sass/styles.scss'
        }
      }
    }

  })

  grunt.registerTask('default', ['sass', 'connect', 'open:dev', 'watch'])
}