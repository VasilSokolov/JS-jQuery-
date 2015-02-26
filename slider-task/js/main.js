$(function(){

	var nCurrent = 0,
		nCounts = 0;

	function next(){
		var nNext = nCurrent +1;
		if (nNext >= nCounts) {
			nNext = 0;
		}

		slide(nNext);
		console.log(nNext);
		nCurrent = nNext;
		setTimeout(next, 1000);
	}

	function init(){
		nCounts = $("slider").length;
		setTimeout(next, 1000);
		$(".sliders . slider").eq(0).show();


		// $(".sliders . slider").eq(0).appendTo('.sliders');
		// setTimeout(function(){$(".sliders . slider").eq(0).prependTo('.sliders')}, 1000);


	// $(".sliders .slider").first().show();
	// $(".sliders .slider").eq(0).show();
	// $(".sliders").animate({"left": "-400px"},2000);


	} 
	init();

	function slide(nNext){
		// var firstPic = $(".sliders .slider").eq(1).show();

		var pNext = $(".sliders .slider").eq(nNext);
		pNext.show();
		$(".slider").animate({"left":"-400px"}, 1000, function(){
			// console.log("reset");
			$(".sliders").css({"left":"0"});
			$(".sliders .slider").not(pNext).hide();
		});
	}
});