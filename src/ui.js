define([
    'jquery',
    'underscore'
], function($, _) {
    var UI = function(options) {
        this.options = options;
        this.initialize();
    };
    UI.prototype.initialize = function() {
        this.setArea();
        this.setWrapPanel();
        this.setPanel();
    };
    UI.prototype.setArea = function() {
        $(this.options.id).css({
            'overflow': 'hidden',
            'height': this.options.height,
            'z-index': 2000l
        })
    };
    UI.prototype.setWrapPanel = function() {

    };
    UI.prototype.setPanel = function() {

    };
    return UI;
});