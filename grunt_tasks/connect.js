/*global module:false*/
module.exports = {
  server: {
    options: {
      port: '<%= config.localhost.port %>',
      base: '<%= config.dist._ %>',
      hostname: ''
    }
  }
}
