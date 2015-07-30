var gulp 	= require('gulp');
var babel = require('gulp-babel');
var config 	= require('../config').build;

gulp.task('build', function () {
  return gulp.src(config.src + '/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest(config.dest));
});