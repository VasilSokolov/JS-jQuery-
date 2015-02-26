$(function() {
	$(".close-btn").click(function  () {
		$(".second").slideUp();
	})
	
	$(".open-btn").click(function  () {
		$(".second").slideDown();
	})

	$(".toggle-btn").click(function  () {
		$(".second").slideToggle();  
	})

	$("li").has(".dropdown").hover(
		function  () {
			$(this).find(".dropdown").slideDown(2000);	
		},
		function  () {
			$(this).find(".dropdown").slideUp(2000);			
		}
	);
});