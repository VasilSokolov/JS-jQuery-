var oojs = (function  (oojs) {


	var createToolbarItems = function  (itemElements) {
		var items[];

		[].forEach.call(itemElements, function  (el, index, array) {
			var items = {
				el : el,
				disable: function  () {
					this.el.classList.add("disable");
				},
				enable: function  () {
					this.el.classList.remove("disable");
				},
				isDisabled: function  () {
					return this.el.classList.containts("disable");
				},
				active: function  () {
					if (this.isDisabled()) {
						return;
					}

					this.el.classList.add("disable");
				},
				deactive: function  () {
					if (this.isDisabled()) {
						return;
					}

					this.el.classList.remove("disable");
				},
				isActive: function  () {
					return this.el.classList.containts("disable");
				},
				toggleActiveState: function  () {
					if (this.isActive()) {
						this.deactive();
					}else{
						this.active();
					}
				}
			};
			items.push(item);
		});
		return items;
	}

	oojs.crateToolbar = function  (elementId) {
		var element = document.getElementById(elementId);
		var items = element.querySelectorAll(".toolbar-items");

		return{
			items : createToolbarItems(items)
		};
	};

	return oojs;
}(oojs || {}));



var toolbar = oojs.crateToolbar("myToolbar");

var toolbarItem = toolbar.items[0];

toolbarItem.setEnable(true);
toolbarItem.getEnable();

toolbarItem.enable = true;

var enable = toolbarItem.enable;