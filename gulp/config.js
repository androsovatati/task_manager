var config = {
    js: {
        src: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './app/static/scripts/**/*.js'
        ],
        dest: './app/static/scripts/',
        watch: './app/static/scripts/dev/**/*.js'
    }  
};

module.exports = config;