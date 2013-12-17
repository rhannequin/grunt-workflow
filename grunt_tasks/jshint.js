/*global module:false*/
module.exports = {
  options: {
    force: true,
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    boss: true,
    eqnull: true,
    browser: true,
    asi: true,
    globals: {
      console: true,
      require: true,
      module: true
    }
  },
  files: [
    'Gruntfile.js',
    'package.json',
    'config.json',
    '<%= config.local.assets.scripts %>/**/*.js'
  ]
}
