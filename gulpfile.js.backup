var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean-css'),
  include = require('gulp-file-include'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  saveLicense = require('uglify-save-license'),
  sourceMaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  config = {
    bower: 'bower_components'
  }

sass.compiler = require('node-sass')

// Build HTML
function html() {

  return gulp.src('./src/pages/*.html')
    .pipe(include())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())

}

// Compile CSS
function styles() {

  return gulp.src([
    './src/scss/*.scss'
  ])
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(connect.reload())

}

// Combine JS
function scripts() {

  return gulp.src([
    './src/js/*.js',
    './src/js/*/*.js'
  ])
    .pipe(sourceMaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify({
      output: {
        comments: saveLicense
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(connect.reload())

}

// Export CSS Libs
function libs(done) {

  gulp.src([
    config.bower + '/bootstrap/dist/css/bootstrap.min.css',
    config.bower + '/bootstrap/dist/css/bootstrap.min.css.map',
    config.bower + '/animate.css/animate.min.css'
  ])
    .pipe(gulp.dest('./dist/assets/css'))

  // gulp.src([])
  //   .pipe(gulp.dest('./dist/assets/fonts'))

  gulp.src([
    config.bower + '/jquery/dist/jquery.min.js',
    config.bower + '/jquery/dist/jquery.min.map',
    config.bower + '/bootstrap/dist/js/bootstrap.bundle.min.js',
    config.bower + '/bootstrap/dist/js/bootstrap.bundle.min.js.map',
  ])
    .pipe(gulp.dest('./dist/assets/js'))

  done()

}

// Images
function images() {

  return gulp.src([
    './src/images/*.**',
    './src/images/*/*.**'
  ])
    .pipe(gulp.dest('./dist/assets/images'))
    .pipe(connect.reload())

}

// Fonts
function fonts() {

  return gulp.src([
    './src/fonts/*.**'
  ])
    .pipe(gulp.dest('./dist/assets/fonts'))
    .pipe(connect.reload())

}

// Watch
function watch(done) {

  gulp.watch([
    './src/pages/*.html',
    './src/inc/*.html'
  ], html)

  gulp.watch([
    './src/scss/*.scss',
    './src/scss/*/*.scss',
    './src/scss/*/*/*.scss'
  ], styles)

  gulp.watch('./src/js/*.js', scripts)

  gulp.watch([
    './src/images/*.**',
    './src/images/*/*.**'
  ], images)

  gulp.watch([
    './src/fonts/*.**'
  ], fonts)

  done()

}

// Start server
function server(done) {

  connect.server({
    root: './dist',
    livereload: {
      port: 35721
    },
    host: [
      'localhost',
      '192.168.93.25'
    ],
    port: 8888
  })

  done()

}

gulp.task('import', gulp.series(libs))
gulp.task('default', gulp.series(server, watch, html, styles, scripts, images, libs, fonts))
gulp.task('build', gulp.series(server, watch, html, styles, scripts, images, fonts))