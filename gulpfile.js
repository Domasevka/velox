'use strict';

const gulp = require('gulp'),
			jade = require('gulp-jade'),
			notify = require("gulp-notify"),
			plumber = require('gulp-plumber'),
			sass = require('gulp-sass'),
			autoprefixer = require('gulp-autoprefixer');
        var svgSprite = require('gulp-svg-sprite'),
            svgmin = require('gulp-svgmin'),
            cheerio = require('gulp-cheerio'),
            replace = require('gulp-replace');

gulp.task('jade', function(){
	gulp.src('./src/jade/*.jade')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(jade({pretty: '\t'}))
		.pipe(gulp.dest('./')) // Выводим сгенерированные HTML-файлы в корневую папку
		.pipe(notify('Jade is compile!'));
});

gulp.task('sass', function (){
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

gulp.task('svgSpriteBuild', function (){
    return gulp.src('src/i/icons/*.svg')
    // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        /*.pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))*/
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                    render: {
                        scss: {
                            dest:'../../../styles/_sprite.scss',
                            template: "src/styles/templates/_sprite_template.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('src/i/sprite/'));
});



gulp.task('watch', function(){
	gulp.watch('./src/jade/**/*.jade', ['jade']);
	gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'watch']);
gulp.task('svgSprite', ['svgSpriteBuild']);
