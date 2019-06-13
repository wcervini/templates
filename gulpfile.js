const { src, dest } = require('gulp');
const gulp = require("gulp");
const sass = require('gulp-sass')
const rm = require('gulp-rm');
const css = ["./css/**/*.css","./css/**/*bootstrap"];

gulp.task("sass", function(){
    return src("./node_modules/**/mdb*.scss")
        .pipe(sass())
        .pipe(dest('./css'));
});

gulp.task("clear",function(){
    return src(css)
        .pipe(rm());
});

