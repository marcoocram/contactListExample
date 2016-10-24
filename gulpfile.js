var gulp = require('gulp');

// inyección de archivos
var inject  = require('gulp-inject');
var series  = require('stream-series');
var wiredep = require('wiredep').stream;

// esta tarea busca todos los archivos js y css y las inyecta en el index.html
gulp.task('inject', function() {
  var sources_mdl = gulp.src(['./www/app/**/*.mdl.js']);
  var sources     = gulp.src(['./www/app/**/*.js', '!./www/app/**/*.mdl.js', './www/assets/css/*.css']);

  return gulp.src('index.html', { cwd: './www' })
         .pipe(inject(series(sources_mdl, sources), {
             read: false,
             ignorePath: '/www'
         }))
         .pipe(gulp.dest('./www'));
});

// inyecta las librerias de bower
gulp.task('wiredep', function() {
  gulp.src('./www/index.html')
    .pipe(wiredep({
      directory: './www/lib'
    }))
    .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
  gulp.watch(['.www/app/**/*.js', './gulpfile.js'], ['inject']);
  gulp.watch(['./www/lib/**/*', './bower.json'], ['wiredep']);
});

gulp.task('default', ['inject', 'wiredep', 'watch']);

// Puesta en producción (minimificación)
var gulpif        = require('gulp-if');
var minifyCss     = require('gulp-minify-css');
var useref        = require('gulp-useref');
var uglify        = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function() {
  gulp.src(['./www/app/**/*.html'])
    .pipe(templateCache({
      root: 'app/',
      module: 'baseapp.templates',
      standalone: true
    }))
    .pipe(gulp.dest('./www/app/core/template.cache'));
});

gulp.task('compress', function() {
  gulp.src('./www/index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify({ mangle: false })))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src('./www/index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
  gulp.src('./www/lib/ionic/release/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./www/assets/img/**/*')
        .pipe(gulp.dest('./dist/assets/img'));
    gulp.src('./www/assets/css/fonts/**/*')
        .pipe(gulp.dest('./dist/css/fonts'));
    gulp.src('./www/assets/files/**/*')
        .pipe(gulp.dest('./dist/assets/files'));
});

gulp.task('build', ['templates', 'compress', 'copy']);