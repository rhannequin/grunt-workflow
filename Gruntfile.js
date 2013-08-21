module.exports = function (grunt) {
  "use strict";

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        force: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        asi: true,
        globals: {
          console: true,
          require: true,
          module: true
        }
      },
      files: [
        'Gruntfile.js',
        'package.json',
        'app/assets/scripts/**/*.js'
      ]
    },

    sass: {
      all: {
        files: {
          'app/assets/styles/styles.css': 'app/assets/styles/sass/styles.scss'
        }
      }
    },

    replace: {
      dev: {
        options: {
          variables: {
            'livereload': '<script src="http://localhost:35729/livereload.js"></script>'
          },
          prefix: '@@'
        },
        files: [
          {src: ['app/index.html'], dest: 'app/index.html'}
        ]
      }
    },

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
      },
      jshint: {
        files: [
          '*.js',
          '*.json'
        ],
        tasks: ['jshint']
      }
    }

  })

  grunt.registerTask('scripts', ['sass', 'jshint', 'replace:dev'])
  grunt.registerTask('dev', ['scripts', 'connect', 'open:dev', 'watch'])
  grunt.registerTask('default', ['dev'])
}