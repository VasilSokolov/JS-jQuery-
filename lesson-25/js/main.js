var Actors = {
	init:function(config){
 		this.config = config;

 		this.setupTemplate();
 		this.bindEvents();

 		$.ajaxSetup({
 			url: "index.php",
 			type: "POST"
 		})

 		$("button").remove();
	},

	bindEvents:function (){
		this.config.letterSelection.on('change', fetchActors);
		this.config.actorList.on("click", "li", this.displayAuthorInfo);
	},

	setupTemplate: function(){
		this.config.actorListTemplate = Handlebars.compile( this.config.actorListTemplate);
		Handlebars.registerHelper( "fullName", function(actor){
			 return actor.first_name + " " + actors.last_name;

			});
	}

	},

	fetchActors: function(){
		var self = Actotors;
		$.ajax({
			data: self.config.form.serialize(),
			dataType: "json";
			success: function(result){
                self.config.actorList.empty();

				if (result[0]) {
				self.config.actorList.empty().append(self.config.actorListTemplate(result));
				}else{
					self.config.actorListTemplate.append('<li>Nothing return.</li>');
				}
			}
		});
	},

	displayAuthorInfo: function(s){
		var self = Actors;

		$.ajax({
			data: {actor_id: $(this).data("actor_id")}
		}).done(function() {
			
		});
		e.preventDefault();

	} 
};

Actors.init({
	letterSelection: $("#q"),
	form: $("#actor-selection"),
	actorListTemplate: $("actor_list_template").html(),
	actorList: $("ul.actor_list")
}); 