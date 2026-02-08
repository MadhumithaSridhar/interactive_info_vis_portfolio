// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {
  const horizonY = 450;
  const margin = 60;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textAlign(p.CENTER, p.CENTER);;
  };
  p.draw = function () {
    p.background(210, 240, 245);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    // p.text('HWK #4. A', p.width / 2, p.height / 2);
    drawTimeline();
  };
  function drawTimeline() {
    p.noStroke();
    p.fill(185, 225, 135);
    p.rect(0, horizonY, p.width, p.height - horizonY);

    p.stroke(100);
    p.strokeWeight(2);
    p.line(margin, horizonY, p.width - margin, horizonY);

    let markers = [0, 6, 12, 18, 24];
    markers.forEach(hr => {
      let x = p.map(hr, 0, 24, margin, p.width - margin);
      p.stroke(100);
      p.line(x, horizonY - 10, x, horizonY + 10);
      p.noStroke();
      p.fill(60);
      p.textSize(15);
      let label = hr === 12 ? "12 pm" : (hr % 12 === 0 ? "12 am" : (hr > 12 ? (hr-12)+" pm" : hr+" am"));
      p.text(label, x, horizonY + 35);
    });
  }
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
