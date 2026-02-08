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
    p.background(10, 15, 30);
    
    let h = p.hour();
    let name = getConstellationName(h);

    p.fill(100, 200, 220);
    p.noStroke();
    p.textSize(22);
    p.textStyle(p.ITALIC);
    p.text(`${name} Rising`, p.width/2, p.height - 150);
  };

  function getConstellationName(h) {
    if (h === 0) return "Phoenix";
    if (h >= 1 && h < 5) return "Owl";
    if (h === 6) return "Rooster";
    return "The Wanderer";
  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
