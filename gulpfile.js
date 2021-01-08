const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


const style = () => {
    return gulp.src('src/scss/index.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
}


const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);

}


exports.style = style;
exports.watch = watch;