/*global module:false*/
module.exports = {
  all: {
    files: {
      '<%= config.local.assets.styles %>/app.css': '<%= config.local.assets.sass %>/app.scss'
    }
  }
}
