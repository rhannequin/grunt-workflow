module.exports = function (grunt) {
  "use strict";

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

  var config = grunt.file.readJSON('config.json')

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,

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
        'config.json',
        '<%= config.local.assets.scripts %>/**/*.js'
      ]
    },

    sass: {
      all: {
        files: {
          '<%= config.local.assets.styles %>/app.css': '<%= config.local.assets.sass %>/app.scss'
        }
      }
    },

    replace: {
      dev: {
        options: {
          variables: { 'livereload': '<script src="http://localhost:35729/livereload.js"></script>' },
          prefix: '@@'
        },
        files: [
          {
            src: ['<%= config.local._ %>/index.html'],
            dest: '<%= config.dist._ %>/index.html'
          }
        ]
      },
      build: {
        options: {
          variables: { 'livereload': '' },
          prefix: '@@'
        },
        files: [
          {
            src: ['<%= config.local._ %>/index.html'],
            dest: '<%= config.dist._ %>/index.html'
          }
        ]
      }
    },

    concat: {
      dev: {
        options: { separator: ';' },
        files: {
          '<%= config.dist.assets.scripts %>/app.js': [
            // Bower components
            '<%= config.bower %>/zepto/zepto.js',
            // Scripts
            '<%= config.local.assets.scripts %>/**/*.js'
          ],
          '<%= config.dist.assets.styles %>/app.css': ['<%= config.local.assets.styles %>/**/*.css']
        }
      },
      build: {
        options: { separator: ';' },
        files: {
          '<%= config.dist.assets.scripts %>/app.js': [
            // Bower components
            '<%= config.bower %>/zepto/zepto.js',
            // Scripts
            '<%= config.local.assets.scripts %>/**/*.js'
          ],
          '<%= config.dist.assets.styles %>/app.css': ['<%= config.local.assets.styles %>/**/*.css']
        }
      }
    },

    uglify: {
      build: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: { '<%= config.dist.assets.scripts %>/app.js': ['<%= config.dist.assets.scripts %>/**/*.js'] }
      }
    },

    cssmin: {
      build: {
        files: { '<%= config.dist.assets.styles %>/app.css': ['<%= config.dist.assets.styles %>/**/*.css'] }
      }
    },

    connect: {
      server: {
        options: { port: '<%= config.localhost.port %>', base: '<%= config.dist._ %>', hostname: '' }
      }
    },

    open : {
      dev : { path: '<%= config.localhost.hostname %>:<%= config.localhost.port %>' }
    },

    watch: {
      livereload: {
        files: [ '<%= config.dist._ %>/**/*.*' ],
        options: { livereload: true }
      },
      sass: {
        files: [
          '<%= config.local.assets.sass %>/**/*.{scss,sass}',
          '<%= config.local.assets.sass %>/_partials/**/*.{scss,sass}'
        ],
        tasks: ['styles']
      },
      scripts: {
        files: ['<%= config.local.assets.scripts %>/**/*.js'],
        tasks: ['scripts']
      },
      html: {
        files: ['<%= config.local._ %>/**/*.html'],
        tasks: ['replace:dev']
      }
    }

  })

  grunt.registerTask('styles', ['sass', 'concat:dev'])
  grunt.registerTask('scripts', ['jshint', 'concat:dev'])
  grunt.registerTask('statics', ['styles', 'scripts'])

  grunt.registerTask('dev', ['statics', 'replace:dev', 'connect', 'open:dev', 'watch'])
  grunt.registerTask('build', ['statics', 'replace:build', 'concat:build', 'uglify:build', 'cssmin:build'])
  grunt.registerTask('default', ['dev'])
}