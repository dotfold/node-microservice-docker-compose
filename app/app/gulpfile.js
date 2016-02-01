"use strict";

var gulp = require("gulp");
var eslint = require("gulp-eslint");
var gulpNodemon = require("gulp-nodemon");
var shell = require("gulp-shell");

gulp.task("lint", function() {
  return gulp.src("app/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("dev", function () {
  return gulpNodemon({
    script: "index.js",
    watch: "*.js",
    exec: "./node_modules/.bin/babel-node",
    args: ["--port", "8080"] // default port
  });
});

gulp.task("build", shell.task([
  "babel app --out-dir lib"
]));

gulp.task("test", shell.task([
  "npm test"
]));

gulp.task("tdd", shell.task([
  "npm run tdd"
]));

gulp.task("default", ["lint"]);
