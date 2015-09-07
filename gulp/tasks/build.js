var gulp 	= require('gulp');
var babel = require('gulp-babel');
var config 	= require('../config').build;
var changed   = require('gulp-changed');

gulp.task('build', function () {
  return gulp.src(config.src + '/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});