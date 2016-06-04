'use strict';

/**
 * 网站首页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('about.tpl');
var head = require('widgets/head');
var footer = require('widgets/footer');
var port = require('util/port');

var about = Vue.extend({
    template: tpl,
    data: function () {
        return {
            data: {
                crumbdata: {},
                list: []
            }
        }
    },
    components: {
        "c-head": head(),
        "c-footer": footer()
    },
    ready: function () {
        $('.testimonails-slider').flexslider({
            animation: 'slide',
            slideshowSpeed: 5000,
            prevText: '',
            nextText: '',
            controlNav: false
        });

    },
    method: function () {

    }
});

var init = function () {
    return new about({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}