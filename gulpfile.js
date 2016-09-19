const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');

gulp.task('sass', function(){
    return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function(){
  return gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('default', function(cb){
  return runSequence(['sass', 'sass:watch'], cb);
});
