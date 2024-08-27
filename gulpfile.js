const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

function compileSass() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/styles"));
}

function compressImages() {
    return gulp.src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
}

function compressJs() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./dist/scripts"))
}

exports.default = gulp.parallel(compileSass, compressImages, compressJs);