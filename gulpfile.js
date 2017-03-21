var gulp = require('gulp');
var concatVendor = require('gulp-concat-vendor');
var uglify = require('gulp-uglify');
var vendorJs;
gulp.task('default', function() {
	vendorJs = gulp.src('sample/angularPopService.js').pipe(
			concatVendor('angularPopService.min.js')).pipe(uglify({
		mangle : false
	})).pipe(gulp.dest('dist/'));
});
