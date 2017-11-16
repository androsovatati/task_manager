var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    concat = require('gulp-concat'),
    config = require('./gulp/config');

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('scss', function() {
});

gulp.task('js', function() {
    gulp.src(config.js.src)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(config.js.watch, ['js']);
});

gulp.task('default', ['scss', 'js', 'watch', 'browser-sync'], function() {
    gulp.watch('./app/static/scripts/main.js').on('change', bs.reload);
});