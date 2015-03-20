define([
    'jquery',
    'underscore'
], function($, _) {
    var UI = function() {};
    UI.prototype.setPanel = function() {
        console.log('setPanel')
    };
    return UI;
});