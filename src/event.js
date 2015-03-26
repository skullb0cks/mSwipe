define([
    'jquery',
    'underscore'
], function($, _) {
    var Event = function(options) {
        this.options = options;
        this.initialize.apply(this, arguments);
    };
    Event.prototype.initialize = function() {

    };
    Event.prototype.on = function(type, func) {
        if(type === 'flick') {
            $(this.options.id).on('mousedown', function(e) {
            });
        }
    };
    return Event;
});