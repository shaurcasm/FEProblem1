const gulp = require('gulp'),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

const paths = {
    styles: {
        // By using public/styles/**/*.scss we're telling gulp to check all folders for any scss files */
        src: 'public/styles/**/*.scss',
        dest: 'public/css'
    },
    views: {
        src: 'views/*.pug'
    }

    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
}
function style() {

    return (
        gulp
            .src(paths.styles.src)

            // Inititalize sourcemaps before compilation starts
            .pipe(sourcemaps.init())

            // Use sass with the files found and log any errors
            .pipe(sass())
            .on('error', sass.logError)

            // Use Postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))

            // Add/write the sourcemaps
            .pipe(sourcemaps.write())

            //What is the destination for the compiled files
            .pipe(gulp.dest(paths.styles.dest))

            // Add browserSync stream pipe after completion
            .pipe(browserSync.stream())
    );
}

function reload(done) {
    browserSync.reload();
    done();
}

// gulp.watch takes in the location of the files to watch for changes
function watch() {
    // Add browsersync initialization at the start of the watch task
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        /*server: {
            baseDir: "./"
        },*/
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
        proxy: "localhost:9000"
    });
    
    style();

    gulp.watch(paths.styles.src, style);
    
    // We should tell gulp which files to watch to trigger the reload
    // This can be html, pug or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch(paths.views.src, reload);
    gulp.watch(paths.styles.dest, reload)
}

exports.style = style;
exports.watch = watch;