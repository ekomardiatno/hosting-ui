+function ($) {
  'use strict'

  function startFn(el, options) {
    el.css({
      height: 'auto'
    })
    var arrHeight = [],
        wScr = $(window).width()
    for(var i=0;i<el.length;i++) {
      arrHeight.push(el.eq(i).outerHeight())
    }
    if(wScr >= options.minScreen) {
      el.css({
        height: Math.max.apply(Math, arrHeight)
      })
    }
  }

  var defaultOption = {
    minScreen: 0
  }

  $.fn.sameHeight = function (options) {
    options = $.extend({}, defaultOption, options);
    return this.each(function () {
      var className = $(this).attr('element-class'),
          el = $(this).find(className)

      startFn(el, options)
      $(window).on('resize', function () {
        startFn(el, options)
      })
    })
  }
  $(document).ready(function() {
    $('.same-height').sameHeight({
      minScreen: 768
    })
  })
}(jQuery)