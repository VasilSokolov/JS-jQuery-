(function($){
	var sliderUL = $("div.slider").css("overflow", "hidden").children('ul'),
		imgs = sliderUL.find('img'),
		
		imgWidth = imgs.width,//900
		
		imgsLen = imgs.length, //5
		current = 1,
		totalImgsWidth = imgsLen *imgWidth; //4500

	$("#slider-nav").show().find('button').on('click', function() {
		var direction = $(this).data("dir"),
		loc = imgWidth; //900
		
		//ipdate current value
		(direction === "next") ? ++current : --current;

		//if first image
		if ( currunt === 0 ) {	
			current = imgsLen;
			loc = totalImgsWidth - imgWidth; //4500 - 900 = 3600
			direction = "next";
		}else if(current - 1 === imgsLen){ // Are we at end? Should we rest?
			current = 1;
			loc = 0;
		}
		transition (sliderUL, loc, direction);
	});	

	function transition(current, loc, direction){
		var unit; //-= +=

		if (direction && loc !==0) {
			unit = (direction === "next" ) ? "-=" : "+=";
		};

		container.animate ({
			"marginLeft" : unit ? (unit + loc) : loc
		});
	}
	
})(jQuery);