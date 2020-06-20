$(document).ready(function() {
  $('select').niceSelect();

  $(".js-banner-slider").slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging: function() {
			return '<div class="slider__dot"></div>'},
		arrows:  true,
		prevArrow:".slider-nav__prev",
		nextArrow:".slider-nav__next",
		appendDots: '.slider-dots'
	});

	$(".menu-mobile").click(function(){
		$(this).closest(".menu-inner").toggleClass("active")
		$(this).closest(".banner-section").toggleClass("active")
	})

	$(".banner-section .btn-lg-green").click(function () {
		$("html, body").animate({ scrollTop: $(".banner-section").height()}, "slow");
		return false;
	});
});