/*global module:false*/
module.exports = {
  dev: {
    options: {
      variables: {
        'livereload': '<script src="http://localhost:35729/livereload.js"></script>'
      },
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
      variables: {
        'livereload': ''
      },
      prefix: '@@'
    },
    files: [
      {
        src: ['<%= config.local._ %>/index.html'],
        dest: '<%= config.dist._ %>/index.html'
      }
    ]
  }
}
