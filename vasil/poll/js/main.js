
$(function(){
	$(".poll-bar").each(function() {
		var self = $(this),
			nPro = self.data("pro");
			console.log(nPro);
			self.animate({"width":nPro+"%"}, 2000);
	});
	$("h2").on('click', function() {
		$(this).fadeOut(2000);
	});
});