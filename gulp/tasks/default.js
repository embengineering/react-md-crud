var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function(callback) {
  callback = callback || function() {};
  return runSequence(['sass', 'eslint', 'jade'], 'watch', 'jsonServer', callback);
});
