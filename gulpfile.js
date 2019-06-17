const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const reload      = browserSync.reload;
const rm          = require('gulp-rm');
const src = {
    sass: './src/scss/style.scss',
    css:  './css',
    html: './*.html',
    src:  './'
};


// Compile sass into CSS
function style(){
    return gulp.src(src.sass)
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
    gulp.watch(src.sass,style);
    gulp.watch(src.html).on("change",reload);    
}

function sasswatch(){
    gulp.watch(src.sass,style);
}

exports.sass= style;
exports.watch= watch;
exports.watchsass= sasswatch;
exports.default=watch;
