if (typeof(AnnualSlider) === 'undefined') {
    AnnualSlider = {};
}
(function($) {

    function Slider($element) {

        var self = this;
        this.$el = $element;
        this.gridWidth = ($(window).width()) / 365;
        this.gridHeight = 80;
        this.gridRows = 1;
        this.gridColumns = 365;
        this.visibleColumns = 12;
        this.visibleGridWidth = ($(window).width()) / 12,
            this.visibleColumnsDivvy = 6;
        this.monthNames = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        this.divvyMonthNames = ["no data", "no data", "no data", "no data", "no data", "no data", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        this.init();
        this.isDivvy = false;

    };

    Slider.prototype.init = function() {
        var self = this;
        this.headerLoader = $('<div class="header-loader" ><div class="loader more"></div><div class="header-loader-txt">Loading Data</div></div>');
        this.overlay = $('<div class="bg-overlay" />');
        this.track = $('<div id="sliderTrack" />');
        this.subNav = new Main.SubNav($('<div id="subNav" />'));
        this.$el.append(this.subNav.$el);
        $('#header').append(this.headerLoader);
        this.headerLoader.show();
        this.$el.before(this.overlay);
        this.$el.append(this.track);
        this.overlay.on({
            pointerstart: function(event) {
                event.preventDefault();
            },
            pointermove: function(event) {
                event.preventDefault();
            }
        });

    };

    Slider.prototype.show = function() {
        TweenLite.to(this.$el, .3, {
            autoAlpha: 1
        });
    };
    Slider.prototype.hide = function() {
        TweenLite.to(this.$el, .3, {
            autoAlpha: 0
        });
    }
    Slider.prototype.showLoader = function() {
        this.headerLoader.show();
    };
    Slider.prototype.hideLoader = function() {
        this.headerLoader.hide();
    };

    Slider.prototype.makeGrid = function(isDivvy) {
        var self = this;
        this.divvyTrack = $('<div id="sliderTrack-divvy" />');
        this.trackFill = $('<div class="trackFill" />');
        this.track.append(this.trackFill, this.divvyTrack);
        var ev = $._data(this.track[0], 'events');
        if (ev && ev.tap) {
        }
        else {
            this.track.on({
                tap: function(event) {
                    var x = event.x;
                    var xPos = Math.max(1, Math.round(x / self.gridWidth));
                    xPos = Math.min(365, xPos);
                    var offsetX = self.isDivvy ? parseInt(self.divvyTrack.css("left")) + 51 : 0;


                    if (x > parseInt(self.divvyTrack.css('left')) && self.isDivvy) {


                        TweenLite.to(self.thumb, .5, {
                            x: x,
                            overwrite: 5,
                            ease: Power3.easeInOut
                        });

                        TweenLite.set(self.dragger[0], {
                            x: x
                        });

                        TweenLite.to(self.trackFill, .5, {
                            width: x - offsetX,
                            ease: Power3.easeInOut,
                            overwrite: 5
                        });

                        self.setSliderDate(xPos);
                        self.sendUpdateMessage(xPos);

                    }
                    else if (!self.isDivvy) {


                        TweenLite.to(self.thumb, .5, {
                            x: x,
                            overwrite: 5,
                            ease: Power3.easeInOut
                        });

                        TweenLite.set(self.dragger[0], {
                            x: x
                        });

                        TweenLite.to(self.trackFill, .5, {
                            width: x,
                            ease: Power3.easeInOut,
                            overwrite: 5
                        });

                        self.setSliderDate(xPos);
                        self.sendUpdateMessage(xPos);

                    }

                },
                pointermove: function(event) {

                    event.preventDefault();
                }
            });
        }

        //hidden grid

        var i, x, y;
        var labels = isDivvy ? this.divvyMonthNames : this.monthNames;

        //visble grid
        for (i = 0; i < this.gridRows * this.visibleColumns; i++) {
            y = Math.floor(i / this.gridColumns) * this.gridHeight;
            x = (i * this.visibleGridWidth) % (this.gridColumns * this.visibleGridWidth);

            var opacity = 1;

            if (i < 6 && isDivvy)
                opacity = .2;

            $("<div class='monthContainer'/>").css({
                position: "absolute",
                width: this.visibleGridWidth,
                height: this.gridHeight,
                opacity: opacity,
                top: y,
                left: x
            }).append($("<span class='monthLbl'/>").text(labels[i])).prependTo(this.track);
        }


        TweenLite.set(this, {
            height: this.gridRows * this.gridHeight + 1,
            width: this.gridColumns * this.gridWidth + 1
        });

        if (isDivvy) {
            TweenLite.set(this.divvyTrack, {
                height: this.gridRows * this.gridHeight + 1,
                width: (this.visibleColumnsDivvy * this.visibleGridWidth + 1) + 102,
                left: (this.visibleColumnsDivvy * this.visibleGridWidth + 1) - 51
            });
        }

        TweenLite.set(this.track, {
            height: this.gridRows * this.gridHeight + 1,
            width: this.gridColumns * this.gridWidth + 1
        });


        this.makeThumb(isDivvy);


        var date = isDivvy ? 182 : 1;
        var distX = date * this.gridWidth;
        var offsetX = isDivvy ? parseInt(this.divvyTrack.css("left")) + 51 : 0;

        TweenLite.to(this.thumb, .5, {
            x: distX,
            overwrite: 5,
            ease: Power3.easeInOut
        });
        TweenLite.set(this.dragger[0], {
            x: distX
        });
        TweenLite.to(this.trackFill, .5, {
            width: distX - offsetX,
            ease: Power3.easeInOut,
            overwrite: 5,
            left: offsetX
        });
        this.setSliderDate(date);


    };

    Slider.prototype.makeThumb = function(isDivvy) {

        this.thumb = $('<div class="thumb" />');
        this.thumbText = $('<div class="thumb-text" />');
        this.thumbMonthText = $('<p class="txt-Month" />');
        this.thumbDayText = $('<span class="txt-Day" />');

        this.thumbText.append(this.thumbMonthText);
        this.thumbText.append(this.thumbDayText);
        this.thumb.append(this.thumbText);

        this.track.append(this.thumb);

        var self = this;
        var bounds = isDivvy ? this.divvyTrack : this.track;

        this.dragger = Draggable.create(this.thumb, {
            bounds: bounds,
            edgeResistance: .99,
            type: "x",
            throwProps: false,
            maxDuration: .5,

            onPress: function() {
                TweenLite.to(self.thumb, .25, {
                    y: -25,
                    marginLeft: -45,
                    ease: "easeOutQuint"
                });

                $(self).trigger('sliderPointerDown');
            },
            onRelease: function() {
                TweenLite.to(self.thumb, .25, {
                    y: 0,
                    ease: "easeOutQuint"
                });
                $(self).trigger('sliderPointerUp');

            },
            onDrag: function() {

                var x = this.x;
                var offsetX = isDivvy ? parseInt(self.divvyTrack.css("left")) + 51 : 0;
                self.trackFill.width(this.x - offsetX);
                var xPos = Math.max(1, Math.round(x / self.gridWidth));
                xPos = Math.min(365, xPos);
                self.setSliderDate(xPos);

            },
            onDragEnd: function() {

                var xPos = Math.max(1, Math.round(this.endX / self.gridWidth));
                xPos = Math.min(365, xPos);

                self.sendUpdateMessage(xPos);

                TweenLite.to(self.thumb, .25, {
                    y: 0,
                    ease: "easeOutQuint"
                });
            },
            snap: {

                x: function(endValue) {

                    var xPos = Math.max(1, Math.round(endValue / self.gridWidth));
                    xPos = Math.min(365, xPos);

                    TweenLite.to(self.trackFill, .4, {
                        width: endValue,
                        ease: "easeOutCubic"
                    });

                    self.setSliderDate(xPos);
                    return Math.round(endValue / self.gridWidth) * self.gridWidth;

                },
                y: function(endValue) {
                    // return Math.round(endValue / gridHeight) * gridHeight;
                }
            }

        });



        TweenLite.set(this.dragger[0], {
            x: 2,
        });

    };


    Slider.prototype.advance = function(numDays) {


        var xPos = Math.max(1, Math.round(this.dragger[0].x / this.gridWidth));
        xPos = Math.min(365, xPos);

        var distX = numDays * this.gridWidth;

        TweenLite.to(this.thumb, 1, {
            x: "+=" + distX,
            ease: 'linear',
            overwrite: 5
                //ease: Power3.easeOut
        });
        TweenLite.set(this.dragger[0], {
            x: "+=" + distX
        });
        TweenLite.to(this.trackFill, 1, {
            width: "+=" + distX, //this.dragger[0].x,
            //ease: Power3.easeInOut
            ease: 'linear',
            overwrite: 5
        });

        var dateme = this.setSliderDate(xPos + numDays);

        TweenLite.to(this.thumb, .25, {
            marginLeft: -45,
            ease: "easeOutQuint"
        });

        return dateme;

    };

    Slider.prototype.lookupDate = function(xPos) {

        var year = 2014;
        var date = new Date(year, 0);

        return new Date(date.setDate(xPos));

    };

    Slider.prototype.setSliderDate = function(xPos) {

        var date = this.lookupDate(xPos);

        var datePieces = String(date).split(" ");
        var month = datePieces[1];
        var dayYear = datePieces[1] + ' ' + datePieces[3];

        var htmlString = datePieces[2] + ' <br /><span class="txt-Day">' + dayYear + '</span>';
        this.thumbMonthText.html(htmlString);

        return date;

    };
    Slider.prototype.sendUpdateMessage = function(xPos) {

        var date = this.lookupDate(xPos);

        $(this).trigger('sliderUpdate', {
            sliderDate: date
        });
    };

    Slider.prototype.hide = function() {

        TweenLite.to(this.$el, .5, {
            y: 45,
            autoAlpha: 0,
            ease: Quint.easeIn
        });
        TweenLite.to(this.overlay, .5, {
            y: 45,
            autoAlpha: 0,
            ease: Quint.easeIn
        });

    };
    Slider.prototype.show = function() {

        TweenLite.to(this.overlay, .5, {
            y: 0,
            autoAlpha: 1,
            ease: Quint.easeOut
        });
        TweenLite.to(this.$el, .5, {
            y: 0,
            autoAlpha: 1,
            ease: Quint.easeOut
        });

        //     this.subNav.AnimateIn();

    };
    Slider.prototype.reset = function(datatype) {

        this.dragger = null;
        this.track.empty();
        // this.track.off();

        if (datatype === "divvy") {
            this.isDivvy = true;
            this.makeGrid(true);
            // this.buildGraph(datatype);
        }
        else {
            this.isDivvy = false;
            this.makeGrid(false);
            // this.buildGraph(datatype);
        }
    };
    Slider.prototype.goToDate = function(num) {

        var self = this;

        var distX = num * this.gridWidth;
        var offsetX = this.isDivvy ? parseInt(self.divvyTrack.css("left")) + 51 : 0;

        TweenLite.to(this.thumb, .5, {
            x: distX,
            overwrite: 5,
            ease: Power3.easeInOut
        });

        TweenLite.set(this.dragger[0], {
            x: distX
        });


        TweenLite.to(this.trackFill, .5, {
            width: distX - offsetX,
            ease: Power3.easeInOut,
            overwrite: 5
        });

        this.setSliderDate(num);

    };

    Slider.prototype.getCurrentDay = function() {


        if (this.dragger[0]) {

            var xPos = Math.max(1, Math.round(this.dragger[0].x / this.gridWidth));
            xPos = Math.min(365, xPos);
            return this.lookupDate(xPos);
        }
        else {
            return 0;
        }
    };

    Slider.prototype.set = function(type) {


    }

    Slider.prototype.buildGraph = function(dataType) {
        width = 1920;
        height = 150;
        var path = "data/tweetsperday.csv";
        switch (dataType) {
            case "twitter":
                path = "data/tweetsperday.csv";
                break;
            case "divvy":
                path = "data/divvyCounts.csv";
                break;
            case "311":
                path = "data/311Counts.csv";
                break;
        }
        var offsetX = this.isDivvy ? parseInt(this.divvyTrack.css("left")) + 51 : 0;
        var chart = d3.select("#sliderTrack").append("svg")
            .attr('class', "slider-chart")
            .attr("preserveAspectRatio", "none")
            .attr("width", '100%')
            .attr("height", height)
            .attr("viewBox", "0 0 1920 150");
        d3.csv(path, type, function(error, data) {
            var x = d3.time.scale()
                .range([0, width]);
            var y = d3.scale.linear()
                .rangeRound([0, height]);
            x.domain([0, 1]);
            y.domain([0, d3.max(data, function(d) {

                return d.count;
            })]);
            chart.selectAll("g")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                    return (((width / 365) * i) - 0.5) + offsetX;
                })
                .attr("y", function(d) {
                    return height - y(d.count) - 0.5;
                })
                .attr("width", width / 365)
                .attr("height", function(d) {
                    return y(d.count);
                });
        });

        function type(d) {
            d.count = +d.count; // coerce to number
            return d;
        }

        //area graph
        /*
        var parseDate = d3.time.format("%m/%d/%Y").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function(d) {
                return x(d.Date);
            })
            .y0(height)
            .y1(function(d) {
                return y(d.Tweets);
            });

        var chart = d3.select("#sliderTrack").append("svg")
            .attr('class', "slider-chart")
            .attr("preserveAspectRatio", "none")
            .attr("width", "100%")
            .attr("height", height)
            .append("g")


        d3.csv("data/tweetsperday.csv", function(error, data) {
            data.forEach(function(d) {
                d.Date = parseDate(d.Date);
                d.Tweets = +d.Tweets;
            });

            x.domain(d3.extent(data, function(d) {
                return d.Date;
            }));
            y.domain([0, d3.max(data, function(d) {
                return d.Tweets;
            })]);

            chart.append("path")
                .datum(data)
                .attr("class", "slider-area")
                .attr("d", area);
        });
*/
    };
    return AnnualSlider.Slider = Slider;
})(jQuery);