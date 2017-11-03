var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var scss        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("app/scss/*.scss", ['scss']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('scss', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);