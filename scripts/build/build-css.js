const gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

return gulp.src([
    './src/css/variables.css',
    './src/css/reset.css',
    './src/css/typography.css',
    './src/css/index.css',
    './src/css/components/*.css',
])
    .pipe(concat('index.css'))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./static/css/'));