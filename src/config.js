requirejs.config({
    baseUrl: '/mSwipe',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore'
    },
    shim: {
        'jquery': ['lib/jquery'],
        'underscore': ['lib/underscore']
    }
});

requirejs(['src/swipe']);