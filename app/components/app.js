define([ "jquery", "underscore", "backbone", "views/tipform", "models/tipForm",
		"text!partials/appContent.html", "domReady" ], function($, _, Backbone,
		FormView, TipForm, appContentHTML, domReady) {

	function init() {
		domReady(function() {
			$("main").html(appContentHTML);

			var container = $("main");
			
			new FormView({
				model : TipForm,
				el : container
			});

		});
	}

	return {
		init : init
	};

});
