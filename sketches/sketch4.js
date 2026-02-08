registerSketch('sk4', function(p) {
  let ripples = [];

  p.setup = function() {
    p.createCanvas(800, 800);
    p.colorMode(p.HSL, 360, 100, 100, 1);
    p.noStroke();
  };

  p.draw = function() {
    let h = p.hour();
    let m = p.minute();
    let ms = p.millis();

    // hour-based background
    let totalProgress = (h + m / 60) / 24;
    let currentHue = totalProgress * 360; 
    p.background(currentHue, 25, 7, 1);

    // 12-second breathing cycle - 4 inhale, 4 hold, 4 exhale
    let cycleTime = ms % 12000;
    let currentRadius = 180;
    let statusText = "";

    if (cycleTime < 4000) {
      currentRadius += p.map(cycleTime, 0, 4000, 0, 100);
      statusText = "INHALE";
    } else if (cycleTime < 8000) {
      currentRadius = 280;
      statusText = "HOLD";
    } else {
      currentRadius += p.map(cycleTime, 8000, 12000, 100, 0);
      statusText = "EXHALE";
    }

    let centerX = p.width / 2;
    let centerY = p.height / 2;

    // breathing glow
    for (let i = 8; i > 0; i--) {
      let opacity = p.map(i, 0, 8, 0.3, 0.01);
      p.fill(currentHue, 80, 60, opacity);
      p.circle(centerX, centerY, (currentRadius + i * 20) * 2);
    }

    // main breathing circle
    p.fill(currentHue, 90, 65, 0.9);
    p.circle(centerX, centerY, currentRadius * 2);

    // status label
    p.fill(currentHue, 20, 95);
    p.textSize(24);
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(statusText, centerX, centerY);
  };
});
