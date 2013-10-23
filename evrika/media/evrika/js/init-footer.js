jQuery(function ($) {

	// main slider
	$('#slidorion').slidorion({
		autoPlay: false,
		speed: 1,
		controlNav: true,
		controlNavClass: 'mainNav'
	});

	// gallery tabs
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');

		// fancybox gallery for selected group
		var src = $(this).attr('href');
		//console.log('init fancybox gallery for: ' + src);		
		$(src + ' .fancybox').attr('rel', 'gallery').fancybox();
	});
	// init default fancybox gallery
	$('#numbers .fancybox').attr('rel', 'gallery').fancybox();

	// dropdown
	$('.dropdown-toggle').dropdown();

	// nomer-slider
	$(".rslides").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		namespace: "callbacks",
		maxwidth: 630
	});
    
    // for images in fancybox popup 
    $('.fancybox-popup').fancybox();

});