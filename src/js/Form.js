+function ($) {
  'use strict'

  $.fn.formControl = function () {
    return this.each(function () {
      if(!$(this).is('select')) {
        var placeholder = $(this).attr('placeholder'),
            idName = $(this).attr('id'),
            valStr = $(this).val(),
            valLength = valStr.length
        placeholder == undefined ? placeholder = "" : placeholder = placeholder
        idName == undefined ? idName = "" : idName = idName
        var strRequired = $(this).is(':required') ? '<span class="text-danger">*</span>' : ''
        var label = '<label for="' + idName + '">' + placeholder + strRequired + '</label>'
        $(this).before(label)
        $(this).removeAttr('placeholder')
        if(valLength > 0) {
          $(this).parent('.form-wrapper').addClass('filled')
        }
        if($(this).is(':focus')) {
          $(this).parent('.form-wrapper').addClass('focused')
        }
        $(this).on('focus', function () {
          $(this).parent('.form-wrapper').addClass('focused')
        })

        $(this).on('blur', function () {
          if($(this).val().length > 0) {
            if(!$(this).parent('.form-wrapper').hasClass('filled')) $(this).parent('.form-wrapper').addClass('filled')
          } else {
            $(this).parent('.form-wrapper').removeClass('filled')
          }
          $(this).parent('.form-wrapper').removeClass('focused')
        })
      }
    })
  }

  $(document).ready(function () {
    $('.form-control').formControl()
  })

}(jQuery)