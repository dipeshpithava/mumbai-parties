$(document).ready(function(){
	$('.menu_btn').click(function(e){
		e.preventDefault();
		$('.menu_sidebar').toggle('slide', {direction:'left'}, 400);
	})

	$('.calendarlbl').click(function(e){
		e.preventDefault();
		$('#calendarouter').toggle('slide', {direction:'bottom'}, 600);
		$('#calendarview').fullCalendar({
			dayClick: function(date, jsEvent, view) {
				loadslecteddata(date.format());
			}
		});
	});

	$('#backmap, #mapview').click(function(){
		$(".owl-carousel").owlCarousel()
		var owl = $(".owl-carousel").data('owlCarousel');
		owl.goTo(0)
	});

	$('.slidep').click(function(){
        $('html, body').animate({scrollTop:$(document).height()},2000);
	})

	// $('#menuanc').click(function(e){
	// 	e.preventDefault();
	// 	window.scrollBy(0, 1500);
	// })

	// $('#eventanc').click(function(e){
	// 	e.preventDefault();
	// 	window.scrollBy(0, 1500);
	// })

	// $('#offeranc').click(function(e){
	// 	e.preventDefault();
	// 	window.scrollBy(0, 1500);
	// })
})