+function ($) {
  'use strict'

  function startAnimation(wintop, top, height, parent, nameClass, repeat) {
      if ( wintop >= top - $(window).height() && wintop <= top + height ) {
          parent.addClass(nameClass)
      } else {
          if ( repeat != undefined ) {
              parent.attr('class', 'animation-wrap')
          }
      }
  }

  $.fn.animationScroll = function () {
      return this.each(function () {
          var a = $(this),
              top = a.offset().top,
              name = a.attr('animation-name') + ' ',
              duration = a.attr('animation-duration'),
              delay = a.attr('animation-delay'),
              repeat = a.attr('animation-repeat'),
              height = a.height()

          a.before('<div class="animation-wrap"></div>')
          var parent = a.prev('.animation-wrap')
          a.appendTo(parent)

          duration == undefined ? duration = '' : duration = duration + ' '
          if(delay != undefined) {
            delay = parseInt(delay)
            delay >= 1000 ? delay = 'delay-' + (delay / 1000).toString() + 's ' : delay = 'delay-' + delay.toString() + 'ms '
          } else {
            delay = ''
          }

          var nameClass = name + duration + delay + 'animated'

          var wintop = $(window).scrollTop()
          startAnimation(wintop, top, height, parent, nameClass, repeat)

          $(window).on('scroll', function (e) {
              var wintop = $(this).scrollTop(),
                  wScr = e.currentTarget.innerWidth,
                  top = a.offset().top,
                  height = a.height()

              if(wScr >= 992) {
                startAnimation(wintop, top, height, parent, nameClass, repeat)
              }
          })
      })
  }
  $(document).ready(function () {
    $('.animation-scroll').animationScroll()
  })
}(jQuery)