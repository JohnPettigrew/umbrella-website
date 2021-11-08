function currentProSubPrice() {
  let basePrice = ($('#annually').hasClass('active') ? 39 : 44);
  let incrementPrice = ($('#annually').hasClass('active') ? 30 : 35);
  let multiplier = (parseInt($("#priceVolume").val()) / 500) - 1;
  let value;
  if (multiplier == -1) {
    value = 'Error'
  } else {
    value = basePrice + (incrementPrice * multiplier);
  };
  return value;
}

$('.pricing-toggle-button').on('click', function() {
  let volume = $("#priceVolume").val();
  if (!$(this).hasClass('active')) {
    $(this).addClass('active').siblings().removeClass('active');
  }
  $('.priceCaveat').html('');
  $('.calculatedPrice').html("£" + currentProSubPrice());
});

$('#priceVolume').on('click', function() {
  let volume = $("#priceVolume").val();
  $('#priceOutput').html(volume);
  $('.priceCaveat').html('');
  $('.planPages').html(volume);
  $('.calculatedPrice').html("£" + currentProSubPrice());
});

$('.pricing-item').on('mouseenter', function() {
  $('.pricing-item').removeClass('active');
  $(this).addClass('active');
}).on('mouseleave', function() {
  $('.pricing-item').removeClass('active');
  $('.pricing-item.selected').addClass('active');
});

// Accordion for how-it-works page
// $(function() { tabsToggle(); });
//
// function tabsToggle() {
//   var animSpeed = 500;
//   var tabWrap = $(".tab-to-accordion");
//   var tabItem = tabWrap.find(".tab-container").children("div[id]");
//   tabItem.hide();
//   $('#tab1').show();
//   $(tabWrap).on("click", 'a[href^="#tab"]', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var activeId = $this.attr("href");
//     var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
//     $('a[href^="#tab"]').parent().removeClass("active");
//     activeOpener.parent().addClass("active");
//     tabItem.stop().slideUp(animSpeed);
//     $(activeId).stop().slideDown(animSpeed);
//   });
// }
