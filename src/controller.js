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
        // this.options 을 parameter 전달 말고 다른 방법은 없을까?
        this.ui = new UI(this.options);
        this.events = new Events(this.options);
        this.events.on('flick', function() {

        })
    };
    return controller;
});