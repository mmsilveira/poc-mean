var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    bowerFiles = require('main-bower-files'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    eventStream = require('event-stream'),
    angularFileSort = require('gulp-angular-filesort');

gulp.task('default', function(callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build-back', 'copy-build-front', 'index', callback);
});

gulp.task('clean', function() {
    return del(['./build']);
});

/*********************
 * Backend
 *********************/
gulp.task('copy-build-back', ['copy-files', 'copy-app', 'copy-config', 'copy-module']);

gulp.task('copy-files', function() {
    gulp.src(['./server.js', './package.json'])
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-app', function() {
    gulp.src('./app/**')
        .pipe(gulp.dest('./build/app'));
});

gulp.task('copy-config', function() {
    gulp.src('./config/**')
        .pipe(gulp.dest('./build/config'));
});

gulp.task('copy-module', function() {
    gulp.src('./node_modules/**')
        .pipe(gulp.dest('./build/node_modules'));
});

/*********************
 * Frontend
 *********************/
gulp.task('copy-build-front', ['copy-html', 'copy-js', 'copy-css', 'copy-vendor', 'copy-assets']);

gulp.task('copy-html', function() {
    gulp.src(['./public/**/*.html', '!./public/vendor/**', '!./public/index.html'])
        .pipe(gulp.dest('./build/public'));
});

gulp.task('copy-js', function() {
    gulp.src(['./public/**/*.js', '!./public/vendor/**'])
        .pipe(angularFileSort())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/public'));
});

gulp.task('copy-css', function() {
    gulp.src(['./public/**/*.css', '!./public/vendor/**'], {
            read: true
        })
        .pipe(concat('app.css'))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/public'));
});

gulp.task('copy-vendor', function() {
    gulp.src(bowerFiles(/.js$/))
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/public'));

    gulp.src(bowerFiles(/.css$/))
        .pipe(concat('vendor.css'))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/public'));
});

gulp.task('copy-assets', function() {
    gulp.src(['./public/assets/**'])
        .pipe(gulp.dest('./build/public/assets'));
});

gulp.task('index', function() {
    gulp.src('./public/index.html')
        .pipe(inject(eventStream.merge(vendorFiles), {
            ignorePath: 'build/public',
            addRootSlash: false,
            name: 'vendor'
        }))
        .pipe(inject(eventStream.merge(appFiles), {
            ignorePath: 'build/public',
            addRootSlash: false
        }))
        .pipe(gulp.dest('./build/public'))
});
var vendorFiles = gulp.src(['./build/public/vendor.min.js', './build/public/vendor.min.css'], {read: false});
var appFiles = gulp.src(['./build/public/app.min.js', './build/public/app.min.css'], {read: false});
