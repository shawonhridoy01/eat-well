// init Isotope
var $grid = $('.menu-box').isotope({
  // options
});
// filter items on button click
$('.menu-item').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});