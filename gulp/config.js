var config = {
    sass: {
        src: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/fullcalendar/dist/fullcalendar.css',
            './app/static/styles/main.scss'
        ],
        dest: './app/static/styles/',
        watch: './app/static/styles/**/*.scss'
    },
    js: {
        src: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/moment/min/moment-with-locales.js',
            './node_modules/fullcalendar/dist/fullcalendar.js',
            './node_modules/fullcalendar/dist/gcal.js',
            './node_modules/fullcalendar/dist/lang-all.js',
            './node_modules/angular/angular.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/angular-ui-calendar/src/calendar.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
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