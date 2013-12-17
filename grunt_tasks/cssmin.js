/*global module:false*/
module.exports = {
  build: {
    files: {
      '<%= config.dist.assets.styles %>/app.css': [
        '<%= config.dist.assets.styles %>/**/*.css'
      ]
    }
  }
}
