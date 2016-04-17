define(["jquery", "underscore", "backbone"], function($, _, Backbone) {

    var TipFormModel = Backbone.Model.extend({
        urlRoot: "/mockrequest",
        defaults: {
            tipPercent: 0,
            billTotal: 0.00,
            newBillTotal: "",
            tipAmount: "",
            tipRating: ""
        },
        initialize: function() {
            this.listenTo(this, "change:billTotal", this.handleChange);
            this.listenTo(this, "change:tipPercent", this.handleChange);
        },
        handleChange: function() {
            // reset calculated values
            this.set({ tipAmount: 0.00 });
            this.set({ newBillTotal: 0.00 });

            // calculate
            this.calcTipAmount(this.get("billTotal"));
        },
        calcTipAmount: function(billTotal) {
            var tipAmount = billTotal * 666;

            this.set({ tipAmount: tipAmount });
            if (isNaN(tipAmount)) {
                this.set({ tipAmount: "" });
            }
            var tipRating = this.defaults.tipRating;

            if (isNaN(tipAmount) || tipAmount === 0) {
                tipRating = "Do you even know what a number is?";
            } else if (tipAmount !== Math.round(tipAmount)) {
                tipRating = 'Hail Satan. Enter a whole number!';
            } else {
                tipRating = 'Good job. Another round?';
            }

            this.set({ tipRating: tipRating });

        },

        setBillTotal: function(billTotal) {
            this.set({ billTotal: Number(billTotal) });
        }
    });

    return new TipFormModel({});
});
