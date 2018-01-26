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

    // Methods to get the corresponding degree value, based on values of hour, minute and second
    getHourInDegrees: function (hour, minute) {
        var increment = Math.round((30 / 60) * minute);
        return ((360 / 12) * hour) + increment;
    },

    getMinuteInDegrees: function (minute) {
        return (360 / 60) * minute;
    },

    getSecondInDegrees: function (second) {
        return (360 / 60) * second;
    },

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

    drawClockHands: function () {
      // Minutes hand
      this.minutesHand = snap.line(this.clockCenter.x, this.clockCenter.y, this.clockCenter.x, 35);
      this.minutesHand.attr({
        fill: 'red',
        stroke: 'red',
        strokeWidth: 3
      });

      // Hours hand
      this.hoursHand = snap.line(this.clockCenter.x, this.clockCenter.y, this.clockCenter.x, 50);
      this.hoursHand.attr({
        fill: 'blue',
        stroke: 'blue',
        strokeWidth: 5
      });

      // Seconds hand
      this.secondsHand = snap.line(this.clockCenter.x, this.clockCenter.y, this.clockCenter.x, 25);
      this.secondsHand.attr({
        fill: 'green',
        stroke: 'green',
        strokeWidth: 1
      });
    },

    // Set the initial position of the hands
    setInitialHandsPosition: function () {
      var hoursMatrix = new Snap.Matrix();
      hoursMatrix.rotate(this.getHourInDegrees(this.hour, this.minute), this.clockCenter.x, this.clockCenter.y);
      this.hoursHand.transform(hoursMatrix);

      var minutesMatrix = new Snap.Matrix();
      minutesMatrix.rotate(this.getMinuteInDegrees(this.minute), this.clockCenter.x, this.clockCenter.y);
      this.minutesHand.transform(minutesMatrix);

      var secondsMatrix = new Snap.Matrix();
      secondsMatrix.rotate(this.getSecondInDegrees(this.second), this.clockCenter.x, this.clockCenter.y);
      this.secondsHand.transform(secondsMatrix);
    },
    
  }
})();

analogClock.hours = 8;
analogClock.minutes = 30;
analogClock.seconds = 15;

analogClock.drawOutline();
analogClock.drawHoursDots();
analogClock.drawClockHands();

analogClock.setInitialHandsPosition();
