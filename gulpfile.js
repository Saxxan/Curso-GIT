const {src, dest} = require("gulp");
const stylus = require("gulp-stylus");

// Compilar Stylus con Gulp

gulp.task('one', function () {
    return gulp.src('./css/one.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./css/build'));
  });

  function css(){
    return src('./dev/stylus/*.styl')
    .pipe(stylus())
    .pipe(dest('./dist/css'))
  }
//function test(cb){
//    console.log("Hola desde la task de gulp");
//    cb();
//}

//exports.test=test;