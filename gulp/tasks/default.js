var gulp = require("gulp"),
    gutil = require("gulp-util");

gulp.task("default", function () {
    gutil.log("Usage gulp [", gutil.colors.magenta("task"), "]");
    gutil.log("List of available ", gutil.colors.magenta("tasks"));
    gutil.log(gutil.colors.magenta("clean"), "   clean the ./build directory");
    gutil.log(gutil.colors.magenta("build"), "   create a production build with minified assets");
    gutil.log(gutil.colors.magenta("dev"), "     create a dev build with assets and sourcemap");
    gutil.log(gutil.colors.magenta("deploy"), "     Publish demo folder to gh-pages");

});
