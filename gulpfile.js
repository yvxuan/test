//创建一个gulp对象
var gulp = new require("gulp");
//测试输出命令
 gulp.task("hello",function(){
	console.log("hello");
});
//拷贝文件
//gulp.dest()是用来写文件的
 gulp.task("copy",function(){
 	return gulp.src("index.html").pipe(gulp.dest('dist/'));
 });
 gulp.task("copy1",function(){
 	return gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/images/"));
 });
 //同时拷贝两个文件夹中的文件到目标文件夹
 gulp.task("copy_L",function(){
 	return gulp.src(["xml/**/*","php/**/*","!php/1.get.php"])
 	.pipe(gulp.dest("dist/data/")); 
 });
/* //gulp同时执行多个任务
 gulp.task('build',['copy','copy1','copy_L'],function(){
 	console.log("任务执行成功");
 });
 */
//设置文件监听
/*gulp.task("watch",function(){
   gulp.watch("index.html",["copy"]);
   gulp.watch("img/*.{jpg,png}",["copy1"]);
   gulp.watch(["xml/**","php/**","!php/1.get.php"],["copy_L"]);
});
*/
//开启一个临时服务器
var content = new require("gulp-connect");
gulp.task("server",function(){
	content.server({
		root:'dist',
		livereload:true
	})
});