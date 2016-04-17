define([ "jquery", "underscore", "backbone", "views/tip",
         "models/tipForm", "models/tip" ], function($,
		_, Backbone, TipView, TipForm, Tip) {

	var FormView = Backbone.View.extend({
		events : {
			"change #billTotal": "handleBillTotalChange",
			"submit" : "handleCalculate",
			"click #clear" : "handleClear"
		},
		initialize : function() {
			this.model = TipForm;
			this.tipView = new TipView({
				model : TipForm
			});
		},
		handleBillTotalChange: function(e){
			this.model.setBillTotal($(e.currentTarget).val());
		},

		handleCalculate: function(e) {
			e.preventDefault();
			this.tipView.render();
		},
		handleClear: function(e) {
			console.log("resetting");
			this.model.set(this.model.defaults);
			this.tipView.render();
		}
	});

	return FormView;
});
