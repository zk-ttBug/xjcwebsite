'use strict';

/**
 * 头部组件
 *
 * @class head
 * @constructor
 */

var tpl = __inline('head.tpl');
var head = Vue.extend({
    template: tpl,
    ready: function () {
    },
    props: ['page'],
    methods: {
        onDash: function () {
            setTimeout(function () {
                location.href = '?show=line#!/dash/support/contact';
            }, 200);
        },
        onFull: function () {
            document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ?
                document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement
                    .mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen &&
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ?
                document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen &&
            document.webkitCancelFullScreen();
        },
        onMenu:function(){
            var navi = $('#slide-out');
            var isShow = (navi.attr('class').indexOf('fadeOutLeft') > 1);
            if(isShow){
                navi.removeClass('fadeOutLeft');
                navi.addClass('fadeInLeft');
                navi.addClass('animated');
                localStorage.setItem('showMenu','show');
                //this.$broadcast('big-content',{});
                $('#dash-content').attr('class','small-content');

            }else{
                navi.removeClass('fadeInLeft');
                navi.addClass('fadeOutLeft');
                navi.addClass('animated');
                localStorage.setItem('showMenu','hide');
                $('#dash-content').attr('class','big-content');
                //this.$broadcast('small-content',{});
            }
            //navi.addClass('hide')
        },
        onLogout:function(){
            setTimeout(function () {
                location.href = "http://"+location.host+"/#!/login";
            }, 200);
        },
        onHome:function(){
            setTimeout(function () {
                location.href = "http://"+location.host+"/#!/index";
            }, 200);
        }
    },
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
    return head;
}

module.exports = init;