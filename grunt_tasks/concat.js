/*global module:false*/
module.exports = {
  dev: {
    options: {
      separator: ';'
    },
    files: {
      '<%= config.dist.assets.scripts %>/app.js': [
        // Bower components
        '<%= config.bower %>/zepto/zepto.js',
        // Scripts
        '<%= config.local.assets.scripts %>/**/*.js'
      ],
      '<%= config.dist.assets.styles %>/app.css': [
        '<%= config.local.assets.styles %>/**/*.css'
      ]
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
      '<%= config.dist.assets.styles %>/app.css': [
        '<%= config.local.assets.styles %>/**/*.css'
      ]
    }
  }
}
