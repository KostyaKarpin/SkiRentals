$(function(){

	/*fixed header*/
 	let header = $("#header");
 	let intro = $("#intro");
 	let introH = intro.innerHeight();
 	let scrollPos = $(window).scrollTop();
 	
 	$(window).on("scroll load resize", function(){
 		introH = intro.innerHeight();
 		scrollPos = $(this).scrollTop();

 		if(scrollPos > introH){
 			header.addClass("fixed");
 		} else {
 			header.removeClass("fixed");
 		}
 	});	

 	/*nav toggle*/
	let nav = $("#nav");
	let navToggle = $("#navToggle");

 	navToggle.on("click", function(event){
 		event.preventDefault();

 		nav.toggleClass("show");
 	});

 	/*slider*/
 	let slider = $("#productSlider");

 	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  arrows: false,
	  dots: true
	});

	let slider1 = $("#productSlider1");

 	slider1.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  arrows: false,
	  dots: true
	});

 	let slider2 = $("#productSlider2");

 	slider2.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  arrows: false,
	  dots: true
	});
});