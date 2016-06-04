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
    components:{
        "c-head":head(),
        "c-slider":slider(),
    },
    ready: function () {

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