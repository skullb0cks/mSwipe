define([
    'jquery',
    'underscore',
    'src/ui',
    'src/event'
], function($, _, UI, Events) {
    var controller = function(options) {
        this.options = options;
        this.initialize.apply(this, arguments);
    };
    controller.prototype.initialize = function() {
        this.UI = new UI(this.options);
        this.EVENTS = new Events();
    };
    return controller;
});