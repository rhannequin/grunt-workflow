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
        files: { 'app/assets/styles/app.css': 'app/assets/styles/sass/app.scss' }
      }
    },

    replace: {
      all: {
        options: {
          variables: { 'livereload': '<script src="http://localhost:35729/livereload.js"></script>' },
          prefix: '@@'
        },
        files: [
          { src: ['app/index.html'], dest: 'dist/index.html' }
        ]
      }
    },

    concat: {
      options: { separator: ';' },
      dev: {
        files: {
          'dist/assets/scripts/app.js': ['app/assets/scripts/**/*.js'],
          'dist/assets/styles/app.css': ['app/assets/styles/**/*.css']
        }
      }
    },

    connect: {
      server: {
        options: { port: 3000, base: 'dist', hostname: '' }
      }
    },

    open : {
      dev : { path: 'http://127.0.0.1:3000' }
    },

    watch: {
      livereload: {
        files: [ 'dist/**/*.*' ],
        options: { livereload: true }
      },
      sass: {
        files: [
          'app/assets/styles/sass/**/*.{scss,sass}',
          'app/assets/styles/sass/_partials/**/*.{scss,sass}'
        ],
        tasks: ['styles']
      },
      scripts: {
        files: ['app/assets/scripts/**/*.js'],
        tasks: ['scripts']
      },
      html: {
        files: ['app/**/*.html'],
        tasks: ['replace']
      }
    }

  })

  grunt.registerTask('styles', ['sass', 'concat:dev'])
  grunt.registerTask('scripts', ['jshint', 'concat:dev'])
  grunt.registerTask('statics', ['styles', 'scripts', 'replace'])
  grunt.registerTask('dev', ['statics', 'concat:dev', 'connect', 'open:dev', 'watch'])
  grunt.registerTask('default', ['dev'])
}