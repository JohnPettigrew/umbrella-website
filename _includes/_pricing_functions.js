function currentProSubPrice() {
  pricingElement = document.getElementById('annually');
  let basePrice = (pricingElement.hasClass('active') ? 39 : 44);
  let incrementPrice = (pricingElement.hasClass('active') ? 30 : 35);
  let multiplier = (parseInt(document.getElementById("priceVolume").val()) / 500) - 1;
  let value;
  if (multiplier == -1) {
    value = 'Error'
  } else {
    value = basePrice + (incrementPrice * multiplier);
  };
  return value;
}

document.querySelector('.pricing-toggle-button').on('click', function() {
  let volume = document.getElementById("priceVolume").val();
  if (!this.classList.contains('active')) {
    this.classList.add('active').siblings().classList.remove('active');
  }
  document.querySelector('.priceCaveat').html('');
  document.querySelector('.calculatedPrice').html("£" + currentProSubPrice());
});

document.getElementById('priceVolume').on('click', function() {
  let volume = document.getElementById("priceVolume").val();
  document.getElementById('priceOutput').html(volume);
  document.querySelector('.priceCaveat').html('');
  document.querySelector('.planPages').html(volume);
  document.querySelector('.calculatedPrice').html("£" + currentProSubPrice());
});

document.querySelector('.pricing-item').on('mouseenter', function() {
  document.querySelector('.pricing-item').classList.remove('active');
  this.classList.add('active');
}).on('mouseleave', function() {
  document.querySelector('.pricing-item').classList.remove('active');
  document.querySelector('.pricing-item.selected').classList.add('active');
});
