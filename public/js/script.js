/*Выпадающее меню*/

$(document).ready(function() {
  $('.header__hamburger').click(function(){
    if ($('.header__hamburger').hasClass('active')) {
      $('.header__hamburger').removeClass('active');
      $('.header-mobile').removeClass('active');
      $('body').removeClass('ov-hid');
    } else {
      $('.header__hamburger').addClass('active');
      $('.header-mobile').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});

/*Кастомный селект*/

$(document).ready(function() {
  $('#orderForm select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $styledSelect.attr('rel', $(this).attr('rel'));
      $this.val($(this).attr('rel'));
      $list.hide();
      $this.trigger('changed');
    });

    $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
});


/*Range*/

$(document).ready(function() {
  $( function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 75,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value + "%");
      }
    });
    $( "#amount" ).val( $("#slider-range-min" + "%").slider( "value" ) );
  } );
});



/*File upload*/

document.getElementById("FileAttachment").onchange = function () {
  document.getElementById("fileuploadurl").value = this.value.replace(/.+[\\\/]/, "");
};