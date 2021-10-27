
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			 
	// for slider-area owl-carousel
		$('.slider-area').owlCarousel({
			loop:true,
			navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
			nav:true,
			autoplay:true,
			autoplayHoverPause:true,
			autoplayTimeout:5000,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
			})
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[4000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})

	//for author testimonial
		$('.author-testimonial').owlCarousel({	 
				loop:true,
				smartSpeed: 650,
				autoplay:true,
				autoplayHoverPause:true,
				autoplayTimeout:4000,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[4000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})			


	
	});

}(jQuery));	
		

	