$(function(){
	$(".poll-bar").each(function() {
		var self = $(this),
			nPro = self.data("pro");
			console.log(nPro);

			$(this).animate({"width":nPro+"%"}, 2000);
	});
	$("h2").on('click', function() {
		$(this).fadeToggle(2000);		
	});
})