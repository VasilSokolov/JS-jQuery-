$(function() {
	var link = $("link");
	$("button").click(function  () {
		var stylesheet = $(this).data("file");

		link.attr("href", "css/"+stylesheet+".css");


	})
});