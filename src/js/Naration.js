+function ($) {
  'use strict'
  $.fn.naration = function () {
    var el = $(this)
    $(window).on('scroll', function (e) {
      var height = e.currentTarget.innerHeight,
          width = e.currentTarget.innerWidth,
          offsetTop = e.currentTarget.pageYOffset

      if(width >= 1200) {
        if(offsetTop >= height / 5) {
          el.removeClass('fadeInUp').removeClass('animated')
          el.addClass('fadeOutUp animated')
        } else {
          if(el.hasClass('fadeOutUp')) {
            el.removeClass('fadeOutUp').removeClass('animated')
            el.addClass('fadeInUp animated')
          }
        }
      }
    })
  }
  $(document).ready(function() {
    $('.main-section-homepage .naration').naration()
  })
}(jQuery)