let gulp = require( 'gulp' );
let sass = require( 'gulp-sass' );
let converter = require( 'sass-convert' );
let sassdoc = require( 'sassdoc' );
let cleanCSS = require( 'gulp-clean-css' );

gulp.task( 'sass', function () {
    return gulp.src( './sass/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( cleanCSS() )
        .pipe( gulp.dest( './css' ) );
} );

gulp.task( 'sass:watch', function () {
    gulp.watch( './sass/**/*.scss', [ 'sass' ] );
} );


gulp.task( 'convert', function () {
    return gulp.src( './sass/*.+(css|scss)' )
        .pipe( converter( {
            from: 'css',
            to: 'scss',
        } ) )
        .pipe( sassdoc() );

} );


gulp.task( 'default', [ 'sass:watch' ] );
