var config = {
    sass: {
        src: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './app/static/styles/main.scss'
        ],
        dest: './app/static/styles/',
        watch: './app/static/styles/**/*.scss'
    },
    js: {
        src: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './app/static/scripts/dev/**/*.js'
        ],
        dest: './app/static/scripts/',
        watch: './app/static/scripts/dev/**/**/*.js'
    },
    html: {
        watch: './app/static/scripts/dev/**/**/*.html'
    }
};

module.exports = config;