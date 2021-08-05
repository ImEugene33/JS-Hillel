const { dest, src, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const sync = require("browser-sync").create();
const concat = require("gulp-concat");
const del = require("del");
const jsmin = require("gulp-uglify");
const babel = require("gulp-babel");

function html() {
  return src("src/**.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("build"));
}

function scss() {
  return src("src/style/**.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(dest("build"));
}

function jscript() {
  return src("src/**.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(jsmin())
    .pipe(concat("commonn.js"))
    .pipe(dest("build"));
}

function clear() {
  return del("build");
}

function serve() {
  sync.init({ server: "./build" });
  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
}

exports.pack = series(clear, scss, html, jscript);
exports.serve = series(clear, scss, html, jscript, serve);
