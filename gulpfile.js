var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var react = require('gulp-react');

gulp.task('clean', function () {
  return gulp
    .src('dist/**/*.*', {read: false})
    .pipe(clean());
});

gulp.task('prepareJS', function () {
  return gulp
    .src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('prepareJSX', function () {
  return gulp
    .src('src/**/*.jsx')
    .pipe(react())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('prepareHTML', function () {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('prepareCSS', function () {
  return gulp
    .src('src/**/*.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('staticJS', function () {
  return gulp
    .src('static/**/*.js')
    .pipe(gulp.dest('dist'));
});
