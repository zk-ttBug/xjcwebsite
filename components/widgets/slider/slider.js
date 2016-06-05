'use strict';

/**
 * 轮播组件
 *
 * @class slider
 * @constructor
 */

var tpl = __inline('slider.tpl');
var slider = Vue.extend({
    template: tpl,
    ready: function () {
        plugins();
        $('.flexslider').flexslider({
            prevText: '',
            nextText: ''
        });


    },
    props: ['page'],
    methods: {},
    replace: false
});


/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method init
 * @return {Object} Returns head component
 */
var init = function () {
    return slider;
}

module.exports = init;