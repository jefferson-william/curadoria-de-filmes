'use strict';

var gulp = require('gulp')
    , _ = require('lodash')
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
    , getRequirejsConfig = require('get-requirejs-config')
    ;

var extAll = '{html,css,js,png,jpg,gif,json,ttf,woff2}';

var configRequire = getRequirejsConfig({
    cwd: __dirname,
    base: '/app/assets/script/',
    name: 'Configuration.js',
});

gulp.task('generate-service-worker', function (callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');

    swPrecache.write(path.join('app/assets/script', 'sw.js'), {
          stripPrefix: '/'
        , maximumFileSizeToCacheInBytes: 5242880
        , navigateFallback: 'index.html'
        , staticFileGlobs: [
            , 'app/assets/script/Configuration.js'
            , 'app/assets/script/Bootstrap.js'
            , 'index.html'
            , 'app/**/*.' + extAll
        ],
    }, callback);
});

gulp.task('clean', function () {
    return del(['app/**/*.css']);
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

gulp.task('serve', sequence('clean', 'sass', 'generate-service-worker', ['browser-sync', 'watch']));

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
