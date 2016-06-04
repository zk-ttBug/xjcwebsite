'use strict';

/**
 * 产品列表页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('contract.tpl');
var head = require('widgets/head');
var footer = require('widgets/footer');
var port = require('util/port');

var contract = Vue.extend({
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
            var map;
            function initialize()
            {
                var map_options = {
                    center: new google.maps.LatLng(16.8496189,96.1288854),
                    zoom: 15,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("googleMap"), map_options);
            }

            google.maps.event.addDomListener(window, 'load', initialize);
            google.maps.event.addDomListener(window, "resize", function()
            {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        });
    },
    method: function () {

    }
});

var init = function () {
    return new contract({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}