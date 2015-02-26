$(function(){
	var box = $("div.box");

	$("button").on('click', function() {
		box.animate({
			"font-size": "+=5",
			"width" : "+=300"
		}, 500, "swing");

	});
});