'use strict';

var gulp = require('gulp')
    , es = require('event-stream')
    , sass = require('gulp-sass')
    , del = require('del')
    , runSequence = require('run-sequence')
    , sequence = require('gulp-sequence')
    , browserSync = require('browser-sync').create()
    , plumber = require('gulp-plumber')
    , sourcemaps = require('gulp-sourcemaps')
    , merge = require('merge-stream')
    , gulpIf = require('gulp-if')
    ;

gulp.task('clean', function () {
    return del(['app/assets/**/*.css'], { dot: true });
});

gulp.task('watch', function () {
    gulp
        .watch(['**/*.html'])
        .on('change', browserSync.reload);

    gulp.watch(['**/*.scss'])
        .on('change', function (event) {
            merge([Sass(event.path, 'app/assets/style', TreatSource(event.path).replace(/(.*)(\/.*)/, '$1'))]);
        });
});

gulp.task('sass', function () {
    return merge([Sass('', 'app/assets/style', 'app/assets/scss/**/*.scss')]);
});

gulp.task('default', sequence('clean', ['sass', 'browser-sync', 'watch']));

gulp.task('browser-sync', function () {
    browserSync.init({
        open: false,
        port: '9001',
        server: {
            baseDir: './',
        },
    });
});

function Sass (source, dest, src) {
    return gulp
        .src(source ? TreatSource(source) : src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed', }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
}

function TreatSource (source) {
    var file;

    if (typeof source == 'object') {
        file = source.map(function (f) {
            return f.replace(/[\\]/g, '/');
        });
    } else {
        file = source.replace(/[\\]/g, '/');
    }

    return file;
}
