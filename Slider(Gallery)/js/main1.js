function Slider (container, nav){
	this.container = container;
	this.nav = nav.show();

	this.img = this.container.find("img");
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}
 
Slider.prototype.transition = function(coords){
	this.container.animate({
		"margin-left": coords || -(this.current*this.imgWidth) //
	})
}

Slider.prototype.setCurrent = function(dir){
	var pos = this.current;

	pos += (~~( dir === "next") || -1 );

	this.current = (pos < 0)? this.imgsLen - 1: pos % this.current;

	return pos;

	// (dir === "next")? this.currunt++ : this.currunt--;
}

var slider = new Slider ($("div.slider ul"), $("#slider-nav"));

slider.nav.show().find("button").on('click', function() {
	slider.setCurrent($(this).data("dir"));
	slider.transition();
});