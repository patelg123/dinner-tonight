'use strict';

var gulp            = require('gulp');
var rename          = require('gulp-rename');
var watch           = require('gulp-watch');
var less            = require('gulp-less');
var runSequence     = require('run-sequence');

// Copy images to dist
gulp.task('css-less', function () {
   return gulp.src('./src/App.less')
   .pipe(less())
    .pipe(gulp.dest('./src'))
});




gulp.task('watch', function() {
	gulp.watch('./src/App.less', ['css-less']);
});

gulp.task('default',  function () {
  runSequence(
      'css-less',
      'watch'
  );
});
