define([ "underscore", "backbone"], function(_, Backbone) {

	var TipModel = Backbone.Model.extend({
		defaults : {
    		amt: "0.00",
    		tipRating: "N/A"
    	}
	});

	// Return the model itself
	return TipModel;
});
