'use strict';

var gulp = require('gulp'),
  debug = require('gulp-debug'),
  watch = require('gulp-watch'),
  ghPages = require('gulp-gh-pages'),
  sitemap = require('gulp-sitemap'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  cleanCSS = require('gulp-clean-css'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    images: 'build/',
    fonts: 'build/fonts/',
  },
  src: {
    html: 'src/**/*.html',
    js: 'src/js/main.js',
    style: 'src/style/all.scss',
    images: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.scss',
    images: 'src/images/**',
    fonts: 'src/fonts/**/*.*',
  },
  clean: './build',
};

var config = {
  server: {
    baseDir: './build',
  },
  tunnel: false,
  host: 'localhost',
  port: 3000,
  logPrefix: 'Frontend_Rockstar',
};

gulp.task('deploy', function () {
  return gulp.src('./build/**/*').pipe(ghPages());
});

gulp.task('sitemap', function () {
  gulp
    .src('build/**/*.html', {
      read: false,
    })
    .pipe(
      sitemap({
        siteUrl: 'https://ablefinder.com',
      })
    )
    .pipe(gulp.dest('./build'));
});

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
  gulp
    .src(path.src.html)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(debug({ title: 'unicorn:' }))
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true }));
});

gulp.task('stories:build', function () {
  gulp.src('src/stories/**/*.html').pipe(gulp.dest('build/stories'));
});

gulp.task('js:build', function () {
  gulp
    .src(path.src.js)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true }));
});

gulp.task('style:build', function () {
  gulp
    .src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        sourceMap: true,
        errLogToConsole: true,
      })
    )
    .pipe(
      prefixer({
        browsers: ['last 4 versions'],
      })
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true }));
});

gulp.task('image:build', function () {
  return gulp
    .src([path.src.images], { base: 'src' })
    .pipe(newer(path.build.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
        interlaced: true,
      })
    )
    .pipe(debug({ title: 'unicorn:' }))
    .pipe(gulp.dest(path.build.images))
    .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function () {
  gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', ['html:build', 'js:build', 'style:build', 'fonts:build', 'image:build']);

gulp.task('watch', function () {
  watch([path.watch.html], function (event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function (event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.images], function (event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'webserver', 'watch']);

gulp.src([
  './src/sitemap.xml',
  './src/CNAME',
  './src/robots.txt'
],{
  'base' : './src'
})
  .pipe(gulp.dest('build'));
