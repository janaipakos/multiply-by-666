define([ "jquery", "underscore", "backbone",
         "text!templates/tipDatatemplate.html" ], 
		 function($, _, Backbone, templateHTML) {

	var TipView = Backbone.View.extend({
		el : "section",
		template : _.template(templateHTML),
		initialize : function() {
			this.render();
		},		
		render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	// Return the model itself
	return TipView;
});