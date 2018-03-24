const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./themes/werner/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('./themes/werner/static/css/'));
});

gulp.task('watch',function() {
  gulp.watch('./themes/werner/sass/**/*.scss', ['default']);
});