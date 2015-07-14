var gulp = require('gulp');
var config = require('../config').jsonServer;
var server = require('gulp-json-server');

gulp.task('jsonServer', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest))
  .pipe(server(
    {
      port: config.port
    }
  ));
} );
