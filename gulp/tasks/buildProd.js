var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('buildProd', ['clean'], function(callback) {
  callback = callback || function() {};
  return runSequence(['build', 'sass', 'eslint', 'html'], callback);
});
