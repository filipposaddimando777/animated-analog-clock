// Handle to the Snap library. This objects uses the SVG DOM element with id "clock" then draws the clock inside it
var snap = new Snap("#clock");

// Clock module
var analogClock = (function() {

  return {

    // Clock Properties. Change depending on size of clock.
    clockOutline: null,
    clockCenter: {
      x: 90,
      y: 93
    },
    radius: 85,

    // Clock hands
    hoursHand: null,
    minutesHand: null,
    secondsHand: null,

    // time
    hours: null,
    minutes: null,
    seconds: null,

    // Draws the outline of the clock
    drawOutline: function () {
      this.clockOutline = snap.circle(this.clockCenter.x, this.clockCenter.y, this.radius);
      this.clockOutline.attr({
        fill: "black",
        stroke: "black",
        strokeWidth: 5
      });
    },

    // Draws the dots on the clock representing the hours.
    drawHoursDots: function () {
      for (var x = 1; x <= 12; x++) {
        var hourStroke = snap.line(this.clockCenter.x, 9, this.clockCenter.x, 11);
        hourStroke.attr({
          stroke: "yellow",
          strokeWidth: 2
        });
        var t = new Snap.Matrix();
        t.rotate((360 / 12) * x, this.clockCenter.x, this.clockCenter.y);
        hourStroke.transform(t);
        }
    },










  }
})();

analogClock.drawOutline();
analogClock.drawHoursDots();
