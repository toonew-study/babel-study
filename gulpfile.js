/**
 * Created by Rain on 2015/12/18.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

//基本的打包任务
gulp.task('default', () => {
  return gulp.src('src/test.es6')
    .pipe(babel({
      presets: ['es2015', "stage-0"]
    }))
    .pipe(gulp.dest('dist'));
});




