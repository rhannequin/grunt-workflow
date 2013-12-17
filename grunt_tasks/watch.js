/*global module:false*/
module.exports = {
  livereload: {
    files: ['<%= config.dist._ %>/**/*.*'],
    options: {
      livereload: true
    }
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
