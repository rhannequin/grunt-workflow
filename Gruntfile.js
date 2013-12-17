module.exports = function (grunt) {
  "use strict";

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

  function loadConfig(path) {
    var glob   = require('glob'),
        object = {},
        opt    = { cwd: path }

    glob.sync('*', opt).forEach(function(option) {
      var key = option.replace(/\.js$/,'')
      object[key] = require(path + option)
    })

    return object
  }

  var gruntConfig = {
    pkg:    grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('config.json')
  }

  grunt.util._.extend(gruntConfig, loadConfig('./grunt_tasks/'))

  grunt.initConfig(gruntConfig)

  grunt.registerTask('images', ['copy:images', 'imagemin'])
  grunt.registerTask('styles', ['sass', 'concat:dev'])
  grunt.registerTask('scripts', ['jshint', 'concat:dev'])
  grunt.registerTask('fonts', ['copy:fonts'])
  grunt.registerTask('statics', ['images', 'styles', 'scripts', 'fonts'])

  grunt.registerTask('dev', ['statics', 'replace:dev', 'connect', 'open:dev', 'watch'])
  grunt.registerTask('build', ['statics', 'replace:build', 'concat:build', 'uglify:build', 'cssmin:build'])
  grunt.registerTask('default', ['dev'])
}