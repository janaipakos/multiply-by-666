requirejs.config({
	baseUrl : "app/components",
	paths : {
		// third party
		jquery : "thirdParty/jquery.min",
		domReady : "thirdParty/domReady",
		text : "thirdParty/text",
		backbone : "thirdParty/backbone.min",
		underscore : "thirdParty/underscore.min",
		handlebars : "thirdParty/handlebars.min",
		QUnit : 'test/thirdParty/QUnit_1_17_1',

		// application
		models : "multiply/models",
		views : "multiply/views",
		templates : "multiply/templates",
		partials : "multiply/partials"
	}
});

require([ "app" ], function(app) {
	app.init();
});

