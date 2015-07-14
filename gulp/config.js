var dest = './build';
var src = './src';

module.exports = {
  clean: {
    dest: dest
  }
  ,browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  }
  ,jade: {
    src: src + '/jade/*.jade',
    dest: dest
  }
  ,eslint: {
    src: src + '/js/**/*.js*'
  }
  ,browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/components/app.jsx',
      dest: dest,
      outputName: 'bundle.js',
      transform: ['babelify']
    }]
  }
  ,jsonServer: {
    src: src + "/db/db.json",
    dest: dest + "/db",
    port: "3002"
  }
};
