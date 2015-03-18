if (typeof(Main) === 'undefined') {
    Main = {};
}
(function($) {

    function ToggleBtn(type, off) {

        var self = this;
        this.isOff = off;
        this.$el = $('<div class="caf-toggle-' + type + '" onmouseout="selectzone()" onmouseover="noselectzone()"/>');
        this.container = $('<div class="caf-toggle-container" />');
        this.btn = $('<div class="caf-toggle-btn" />');
        this.btnOff = $('<div class="caf-toggle-btn-off" />');
        this.label = $('<div class="caf-toggle-label" />'); //.html('Buildings On');        	
        this.btn.append(this.btnOff);
        this.container.append(this.label, this.btn);
        this.$el.append(this.container);

        new Button(this.$el, {
            click: function() {
                self.Toggle();
            }
        });

        switch (type) {
            case "animation":
                this.btn.addClass('animation');
                var state = this.isOff ? "off" : "on";
                this.label.html('Animation <div class="caf-toggle-state" >' + state + ' </div>');
                break;
            case "flow":
                this.btn.addClass('flow');
                var state = this.isOff ? "off" : "on";
                this.label.html('selection <div class="caf-toggle-state" >' + state + ' </div>');
                break;
        }

        return this;

    }

    ToggleBtn.prototype.Toggle = function() {

        if (!this.isOff) {
            TweenLite.fromTo(this.btnOff, .25, {
                scaleX: 1.1,
                scaleY: 1.1,
                autoAlpha: 0
            }, {
                scaleX: 1,
                scaleY: 1,
                autoAlpha: 1,
                ease: "easeOutBack"
            });

            var stateLbl = this.label.find('.caf-toggle-state'); //.text('off');

            TweenLite.to(stateLbl, .25, {
                y: -10,
                alpha: 0,
                ease: "easeInQuint",

                onComplete: function() {
                    stateLbl.text('off');
                    TweenLite.set(stateLbl, {
                        y: 10
                    });
                    TweenLite.to(stateLbl, .25, {
                        y: 0,
                        alpha: 1
                    });
                }
            });

            this.isOff = true;

        }
        else {
            TweenLite.to(this.btnOff, .25, {
                scaleX: 1.1,
                scaleY: 1.1,
                autoAlpha: 0,
                ease: "easeInBack"
            });
            var stateLbl = this.label.find('.caf-toggle-state'); //.text('off');

            TweenLite.to(stateLbl, .25, {
                y: 10,
                alpha: 0,
                ease: "easeInQuint",

                onComplete: function() {
                    stateLbl.text('on');
                    TweenLite.set(stateLbl, {
                        y: -10
                    });
                    TweenLite.to(stateLbl, .25, {
                        y: 0,
                        alpha: 1
                    });
                }
            });


            this.isOff = false;
        }

        $(this).trigger('toggleAnimation', {
            state: this.isOff ? "off" : "on"
        });

        $(this).trigger('toggleFlow', {
            state: this.isOff ? "off" : "on"
        });

    }

    return Main.ToggleBtn = ToggleBtn;

})(jQuery);