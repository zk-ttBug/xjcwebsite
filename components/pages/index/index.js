'use strict';

/**
 * 网站首页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('index.tpl');
var head = require('widgets/head');
var slider = require('widgets/slider');
var footer = require('widgets/footer');
var port = require('util/port');

var index = Vue.extend({
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
        "c-slider": slider(),
        "c-footer": footer()
    },
    ready: function () {
        plugins();
        $("div.blog-post").hover(
            function () {
                $(this).find("div.content-hide").slideToggle("fast");
            },
            function () {
                $(this).find("div.content-hide").slideToggle("fast");
            }
        );
        $('.testimonails-slider').flexslider({
            animation: 'slide',
            slideshowSpeed: 5000,
            prevText: '',
            nextText: '',
            controlNav: false
        });
        $('#Container').mixItUp();
    },
    method: function () {

    }
});

var init = function () {
    return new index({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}