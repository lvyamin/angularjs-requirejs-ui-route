//引入gulp
var gulp = require('gulp');
var fs = require("fs");


//引入组件
var concat = require('gulp-concat');           //合并
// var jshint = require('gulp-jshint');           //js规范验证
var uglify = require('gulp-uglify');           //压缩
var rename = require('gulp-rename');          //文件名命名
var amdOptimize = require("amd-optimize");           //require优化
var watch = require('gulp-watch');

var pageageStr = fs.readFileSync("./package.json");

var pageageJSON = JSON.parse(pageageStr);




//脚本检查
gulp.task('lint', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


//require合并
gulp.task('rjs', function () {

    gulp.src('./modules/**')
        .pipe(amdOptimize("main", { //require config
       



            baseUrl:"modules",
            paths: {
              angular:"../lib/angular/angular.min",
              app:"app",
              router:"../lib/angular/angular-ui-router",
              jquery:"../lib/jquery/jquery.min"
            },
            shim: {
              "router":{
                deps:['angular']
              },
              "angular":{
                exports:'angular'
              }
             //...
            },
            optimize: "uglify2",
            uglify2: {
            mangle: false //false 不混淆变量名
            },
            findNestedDependencies: true,
           





        }))
        .pipe(concat("main.plus.js"))           //合并
        .pipe(gulp.dest("js/release/"+pageageJSON.version))          //输出保存
        .pipe(rename("main.js"))          //重命名
        .pipe(uglify())                        //压缩
        .pipe(gulp.dest("js/release/"+pageageJSON.version));         //输出保存
});

gulp.task('default', function () {
    //监听js变化
    gulp.watch('./src/js/**/*.js', function () {       //当js文件变化后，自动检验 压缩
        //gulp.run('lint', 'scripts');
        gulp.run('lint', 'rjs');
    });


});
