const gulp = require('gulp');
const browserify = require('browserify');
const sass = require('gulp-sass');
const path = require('path');
const source = require('vinyl-source-stream');

gulp.task('scss', function() {
  gulp.src('./scss/styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
  const sourcefile = './js/poc.js';
  const fileName = path.basename(sourcefile);
  browserify({
    entries: [sourcefile],
  })
  .bundle()
  .pipe(source(fileName))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scss', 'js', 'watch'], function() {}); 

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('js/**/*.js', ['js']);
    //gulp.watch('dist/**/*', reloadPage);
});