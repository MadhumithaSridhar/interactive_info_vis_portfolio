// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  let constellations = {}; // define the object inside the sketch

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    // defining an example animal constellation (Phoenix)
    constellations["Phoenix"] = [];
    for (let i = 0; i < 60; i++) {
      constellations["Phoenix"].push({
        x: p.width/2 + p.cos(p.TWO_PI/60 * i) * (100 + p.sin(i)*50),
        y: p.height/2 + p.sin(p.TWO_PI/60 * i) * (100 + p.cos(i)*50),
        isKey: i % 15 === 0 // every 15th star is a key feature
      });
    }
  };

  p.draw = function () {
    p.background(10, 15, 30); // fixed typo
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
