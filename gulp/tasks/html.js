var gulp = require('gulp');
var config = require('../config').html;
var browserSync  = require('browser-sync');

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream:true }));
});
