const gulp = require('gulp'),
    concat = require('gulp-concat');

return gulp.src([
    './src/js/*.js',
])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./static/'));