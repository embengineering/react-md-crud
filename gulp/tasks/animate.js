var gulp 			= require('gulp');
var rename 		= require("gulp-rename");
var config 		= require('../config').animateCss;
var changed   = require('gulp-changed');

gulp.task('animateCss', function() {
  return gulp.src(config.src)
    .pipe(rename('_main.scss'))
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});