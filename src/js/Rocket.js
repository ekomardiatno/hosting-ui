+function ($) {
  'use strict'
  $.fn.rocketAnim = function () {
    return this.each(function () {
      var rocket = $(this).find('.animated-rocket'),
          mainSection = $(this).parents('.main-section-homepage'),
          cloud = mainSection.find('.cloud')
        
      $(window).on('scroll', function (e) {
        rocket.css({
          transform: 'translateY(' + e.currentTarget.pageYOffset * -1 + 'px)'
        })
        if(e.currentTarget.pageYOffset >= mainSection.outerHeight() - e.currentTarget.innerHeight) {
          cloud.addClass('absolute-position')
        } else {
          cloud.removeClass('absolute-position')
        }
      })
    })
  }
  $(document).ready(function () {
    $('.main-rocket').rocketAnim()
  })
}(jQuery)