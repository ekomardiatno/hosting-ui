+function ($) {
  'use strict'
  function startAnim(width, pageYOffset, topHeight, nav, top) {
    if (width > 991) {
      if (pageYOffset >= topHeight / 2) {
        var css = {
          transform: 'translateY(-' + topHeight + 'px)',
        }
        top.css(css)
        nav.css(css)
        nav.addClass('affix')
      } else {
        var css = {
          transform: 'translateY(-' + pageYOffset + 'px)',
        }
        top.css(css)
        nav.css(css)
        nav.removeClass('affix')
      }
    }
  }
  $.fn.headerAnim = function () {
    return this.each(function () {
      var top = $(this).find('.top'),
        nav = $(this).find('.navbar')

      $(window).on('scroll', function (e) {
        var width = e.currentTarget.innerWidth,
          pageYOffset = e.currentTarget.pageYOffset,
          topHeight = top.outerHeight()

        startAnim(width, pageYOffset, topHeight, nav, top)

      })
    })
  }

  $(document).ready(function () {
    $('.header-section').headerAnim()
  })
}(jQuery)