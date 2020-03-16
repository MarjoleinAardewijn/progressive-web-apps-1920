const gulp = require('gulp');

return gulp.src('./src/manifest.json')
    .pipe(gulp.dest('./static/'));