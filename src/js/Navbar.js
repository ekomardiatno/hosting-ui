+function ($) {
  'use strict'

  function doAffix(width, pageY, topOffset, navbar) {
    if(width <= 991) {
      if(pageY >= topOffset) {
        navbar.addClass('affix')
      } else {
        navbar.removeClass('affix')
      }
    }
  }

  function affix(topOffset, navbar) {
    var pageY = $(window).scrollTop(),
        width = $(window).innerWidth()
    doAffix(width, pageY, topOffset, navbar)
    $(window).on('scroll', function (e) {
      var pageY = e.currentTarget.pageYOffset,
          width = e.currentTarget.innerWidth
      doAffix(width, pageY, topOffset, navbar)
    })
  }

  $.fn.navbarAffix = function () {
    return this.each(function () {
      affix(50, $(this))
      $(this).on('click', '.navbar-toggler', function () {
        $(this).after('<div class="overlay-opened fadeIn animated faster"></div>')
        $(this).siblings('.navbar-collapse').addClass('opened')
      })
      $(this).on('click', '.overlay-opened', function () {
        var a = $(this)
        a.removeClass('fadeIn').removeClass('animated')
        a.addClass('fadeOut animated')
        a.siblings('.navbar-collapse').removeClass('opened')
        setTimeout(function () {
          a.remove()
        }, 500)
      })
    })
  }

  $(document).ready(function () {
    $('.navbar').navbarAffix()
  })
}(jQuery)