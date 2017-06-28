'use strict';

const gulp = require('gulp'),
			jade = require('gulp-jade'),
			notify = require("gulp-notify"),
			plumber = require('gulp-plumber'),
			sass = require('gulp-sass'),
			autoprefixer = require('gulp-autoprefixer')

gulp.task('jade', function(){
	gulp.src('./src/jade/*.jade')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(jade({pretty: '\t'}))
		.pipe(gulp.dest('./')) // Выводим сгенерированные HTML-файлы в корневую папку
		.pipe(notify('Jade is compile!'));
});

gulp.task('pug', function(){
    gulp.src('./templates/pages/*.jade')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(jade({pretty: '\t'}))
        .pipe(gulp.dest('./')) // Выводим сгенерированные HTML-файлы в корневую папку
        .pipe(notify('Jade is compile!'));
});

gulp.task('sass', function () {
	return gulp.src('./src/styles/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 3 versions', "> 2%"],
			cascade: false
		}))
		.pipe(gulp.dest('./css'))
		.pipe(notify('Sass is compile!'));
});

gulp.task('watch', function(){
	gulp.watch('./src/jade/**/*.jade', ['jade']);
	gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'watch']);