/*global module:false*/
module.exports = {
  compile: {
    options: {
      optimizationLevel: 4,
      progressive: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.dist.assets.images %>',
        src: ['**/*.{png,jpg,jpeg,gif,svg}'],
        dest: '<%= config.dist.assets.images %>'
      }
    ]
  }
}
