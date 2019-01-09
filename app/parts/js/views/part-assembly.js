define([
    'backbone',
    'mustache',
    'templates/part-assembly-view.html'
], function (Backbone) {
    var PartAssemblyView = Backbone.View.extend({

        events: {
            "button": "openHierarchy"
        },

        tagName: 'hi',

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        openHierarchy: function (model) {
            if (model.isLastIterationAssembly()) {
                var acc = document.getElementsByClassName("hButton");
                var i;

                for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function () {
                        /* Toggle between adding and removing the "active" class,
                        to highlight the button that controls the panel */
                        this.classList.toggle("active");

                        /* Toggle between hiding and showing the active panel */
                        var panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                        } else {
                            panel.style.display = "block";
                        }
                    });
                }
            }
        }

    })

    return PartAssemblyView;
})