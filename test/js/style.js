// $(function(){
	// var name = 1;

	// var result = name++;
	// console.log(result); //1

	// var result = name; 
	// console.log(result);  //2

	// var result = ++name;
	// console.log(result);  //3


	// var result = name;
	// console.log(result);  //3
	
// -----------------------------------------



// window.onload = function() {
// 	var el = document.getElementById("foo");

// 		el.onclick = function () {
// 			this.style.backgroundColor = "red";
// 		};
// 	};	

	// var pElement = document.querySelector("p");

	// alert(pElement.parentNode.tagName);

//------------------------------------------

	// var buttons = document.getElementsByTagName("a");

	// for (var i = 0; i < buttons.length; i++) {
		
	// 	buttons[i].attachEvent("onclick", function(ev){
	// 		var className = event.srcElement.innerHTML.toLowerCase();

	// 		event.returnValue = false;

	// 		document.body.className = className;
	// 	});



		// buttons[i].onclick = function() {
		// 	var className = this.innerHTML.toLowerCase();

		// 	document.body.className = className;
		// }
		

		// $('li').parents(".container").removeClass('container');
		// //$('li').closest(".container").removeClass('container');


		// $("div.container").undelegate('h2', 'click', function() {
		// 	$(this).clone().appendTo('.container');
		// });	
// ------------------------------------------
	

(function doSomthing(e){
	var content = $("div.content").hide();

	jQuery.fn.flash = function( speed, easing, callback ) {
		var $this = $(this);
		return this.slideDown(500, function() {
			$this.delay(500).slideUp(500);
		});
	};

	$("h1").on('click', function(event) {
		content.flash();
		/* Act on the event */
	});
})();
// });