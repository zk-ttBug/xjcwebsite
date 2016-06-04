'use strict';

/**
 * 产品列表页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('products.tpl');
var head = require('widgets/head');
var footer = require('widgets/footer');
var port = require('util/port');

var products = Vue.extend({
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
        console.log('here');
        Vue.nextTick(function () {
            plugins();
            $('#Container').mixItUp();
            $(".fancybox").fancybox();
        });
    },
    method: function () {

    }
});

var init = function () {
    return new products({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}