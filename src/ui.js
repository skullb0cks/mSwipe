define([
    'jquery',
    'underscore'
], function($, _) {
    var UI = function(options) {
        this.options = options;
        this.initialize.apply(this, arguments);
    };
    UI.prototype.initialize = function() {
        this.setElement();
        return this;
    };
    UI.prototype.setElement = function() {
        this.setArea();
        this.setWrapPanel();
        this.setPanel();
        return this;
    };
    UI.prototype.setArea = function() {
        $(this.options.id).css({
            'overflow': 'hidden',
            'height': this.options.height,
            'z-index': 2000
        })
    };
    UI.prototype.setWrapPanel = function() {

    };
    UI.prototype.setPanel = function() {

    };
    return UI;
});