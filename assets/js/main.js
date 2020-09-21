jQuery(document).ready(function($){
	if ( $( '.with-carousel' ).length > 0 ) {
		var owl = $('.with-carousel .owl-carousel');
		owl.owlCarousel({
		    loop:true,
		    nav:true,
		    autoplay: true,
		    smartSpeed: 1200,
		    
		    navSpeed: 1200,
		    dotsSpeed: 1200,
		    margin:90,
		    responsive:{
		        0:{
		            items:1
		        },
		        767:{
		            items:1,
		            margin:15
		        },            
		        992:{
		            items:2,
		            margin:30
		        }
		    }
		});
		
	}
	

	
	if ( $( '.slider' ).length > 0 ) {
	$('.slider').owlCarousel({
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    items:1,
	    loop:true,
	    autoplay: true,
	    smartSpeed: 900,
	    margin:30,
	   
	});
	}

});