const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const reload      = browserSync.reload;
const rm          = require('gulp-rm');
const src = {
    scss: './src/scss/**/*.scss',
    css:  './css',
    html: './*.html',
    src:  './src'
};


// Compile sass into CSS
function style(){
    return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
};

function watch(){
    browserSync.init({
        server: {
            baseDir: src
        } 
    });
    gulp.watch(src.scss,style);
    gulp.watch(src.html).on("change",reload);    
}


exports.sass= style;
exports.watch= watch;
exports.default=watch;
