define([
    'jquery',
    'underscore',
    'src/ui',
    'src/event'
], function($, _, UI, Event) {
    var controller = function() {
        this.UI = new UI();
        this.EVENT = new Event();
    };
    controller.prototype.swipe = function(object) {
        console.log(this.UI.setPanel());
    };
    return controller;
});