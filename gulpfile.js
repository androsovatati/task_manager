var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    concat = require('gulp-concat'),
    config = require('./gulp/config'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch('./app/index.html').on('change', bs.reload);
    gulp.watch('./app/static/scripts/main.js').on('change', bs.reload);
});

gulp.task('sass', function () {
    return gulp.src(config.sass.src)
        .pipe(sass().on('error', notify.onError({title: 'sass'})))
        // .pipe(uncss({html: ['./build/index.html']}))
        .pipe(prefix({browsers: ['last 2 versions', 'safari 5', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'], cascade: true}))
        // .pipe(cssmin())
        // .pipe(rename({suffix: '.min'}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(bs.stream());
});

gulp.task('js', function() {
    gulp.src(config.js.src)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(config.sass.watch, ['sass']);
    gulp.watch(config.js.watch, ['js']);
});

gulp.task('default', ['sass', 'js', 'watch', 'browser-sync']);