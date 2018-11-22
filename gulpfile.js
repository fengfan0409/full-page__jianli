const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const browser=require('browser-sync');
const autoprefixer=require('gulp-autoprefixer')
gulp.task('sass',()=>{
    return sass('scss/**/*.scss',{style:'expanded'})//scss目录下及子目录下所有scss文件
        .pipe(autoprefixer())
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
        .pipe(browser.reload({
            stream: true
        }))
})
//task第二个参数[],监听前先执行的内容
gulp.task('watch',['browserSync', 'sass'],()=>{
    gulp.watch('scss/**/*.scss', ['sass']);
})

gulp.task('browserSync', function() {
    browser({
        server: {
            baseDir: './'  //browser-sync自动刷新文件路径
        },
    })
})