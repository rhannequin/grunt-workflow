/*global module:false*/
module.exports = {
  fonts: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['<%= config.local.assets.fonts %>/**'],
        dest: '<%= config.dist.assets.fonts %>/',
        filter: 'isFile'
      }
    ]
  },
  images: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['<%= config.local.assets.images %>/**/*.{png,jpg,jpeg,gif,svg}'],
        dest: '<%= config.dist.assets.images %>/',
        filter: 'isFile'
      }
    ]
  }
}
