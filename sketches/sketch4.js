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

    // color is based on hour progress
    let totalProgress = (h + m / 60) / 24;
    let currentHue = totalProgress * 360; 
    p.background(currentHue, 25, 7, 1);

    // placeholder text
    p.fill(currentHue, 50, 90);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(`${h}:${m}`, p.width / 2, p.height / 2);
  };
});
