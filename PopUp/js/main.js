$(function(){
	$("a.popup-window").on('click', function() {
		var popupBox = $(this).attr("href");
		$(popupBox).fadeIn(400);

		var popMargTop = ($(popupBox).height()+24)/2,
			popMargLeft = ($(popupBox).width()+24)/2
		console.log(popMargLeft);

		$(popupBox).animate({
			marginTop : -popMargTop,
			marginLeft : -popMargLeft
		});

		$("body").append('<div id="mask"></div>');
		$("#mask").fadeIn(400);
		return false;


		$("#mask").keyup(function() {		
			$(this).fadeOut(400);
		});
	});

	$("button.close, #mask").on('click', function() {
		$("#mask, .popupInfo").fadeOut(400, function(){
			$("#mask").remove();
		});
		return false;
	});



});