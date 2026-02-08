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
    let s = p.second();
    let ms = p.millis();

    let totalProgress = (h + m / 60) / 24;
    let currentHue = totalProgress * 360; 
    p.background(currentHue, 25, 7, 1);

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

    // animating the Ripples
    if (p.frameCount % 120 === 0 && statusText !== "HOLD") {
       ripples.push({ r: currentRadius, alpha: 0.6 });
    }
    
    p.noFill();
    p.strokeWeight(3);
    p.drawingContext.setLineDash([8, 12]);
    for (let i = ripples.length - 1; i >= 0; i--) {
      let r = ripples[i];
      p.stroke(currentHue, 40, 85, r.alpha);
      p.circle(centerX, centerY, r.r * 2);
      r.r += 1.2;
      r.alpha -= 0.005;
      if (r.alpha <= 0) ripples.splice(i, 1);
    }
    p.drawingContext.setLineDash([]);

    // UI
    drawUI(h, m, s, currentHue, statusText);
  };

  function drawUI(h, m, s, hue, status) {
    p.textAlign(p.CENTER, p.CENTER);
    p.noStroke();

    // breathing instruction
    p.fill(hue, 20, 95);
    p.textSize(24);
    p.textStyle(p.BOLD);
    p.text(status, p.width / 2, p.height / 2);

    // digital clock
    p.fill(hue, 40, 90);
    p.textSize(48);
    p.textStyle(p.NORMAL);
    let timeString = `${p.nf(h, 2)}:${p.nf(m, 2)}:${p.nf(s, 2)}`;
    p.text(timeString, p.width / 2, p.height - 120);

    // hour progress arc
    p.noFill();
    p.stroke(hue, 60, 80, 0.4);
    p.strokeWeight(6);
    let hrProgress = p.map(m, 0, 60, 0, p.TWO_PI);
    p.arc(p.width / 2, p.height / 2, 650, 650, -p.HALF_PI, hrProgress - p.HALF_PI);
  }
});
