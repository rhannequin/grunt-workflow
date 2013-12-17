/*global module:false*/
module.exports = {
  build: {
    options: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
    files: {
      '<%= config.dist.assets.scripts %>/app.js': [
        '<%= config.dist.assets.scripts %>/**/*.js'
      ]
    }
  }
}
