registerSketch('sk4', function(p) {
  let ripples = [];

  p.setup = function() {
    p.createCanvas(800, 800);
    p.colorMode(p.HSL, 360, 100, 100, 1);
    p.noStroke();
  };

  p.draw = function() {
    // Placeholder background
    p.background(220, 30, 10); 
  };
});