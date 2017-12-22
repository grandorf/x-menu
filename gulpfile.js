const gulp = require('gulp');
const browserify = require('browserify');
const sass = require('gulp-sass');
const path = require('path');
const source = require('vinyl-source-stream');

gulp.task('scss', function() {
  gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});

gulp.task('homepage', function() {
  const sourcefile = './js/newhomepage.js';
  const fileName = path.basename(sourcefile);
  browserify({
    entries: [sourcefile],
  })
  .bundle()
  .pipe(source(fileName))
  .pipe(gulp.dest('./dist'));
});

gulp.task('poc', function() {
  const sourcefile = './js/poc.js';
  const fileName = path.basename(sourcefile);
  browserify({
    entries: [sourcefile],
  })
  .bundle()
  .pipe(source(fileName))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scss', 'homepage', 'poc', 'watch'], function() {}); 

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('js/**/*.js', ['poc', 'homepage']);
    //gulp.watch('dist/**/*', reloadPage);
});