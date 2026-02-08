registerSketch('sk3', function (p) {
  let constellations = {};

  p.setup = function () {
    p.createCanvas(800, 800);

    constellations["Phoenix"] = [];
    for (let i = 0; i < 60; i++) {
      constellations["Phoenix"].push({
        x: p.width/2 + p.cos(p.TWO_PI/60 * i) * (100 + p.sin(i)*50),
        y: p.height/2 + p.sin(p.TWO_PI/60 * i) * (100 + p.cos(i)*50),
        isKey: i % 15 === 0
      });
    }
  };

  p.draw = function () {
    p.background(10, 15, 30);

    let h = p.hour();
    let m = p.minute();
    let name = getConstellationName(h);

    let stars = constellations["Phoenix"];
    drawConstellation(stars, m);

    drawUI(name, m);
  };

  function drawConstellation(points, currentMin) {
    p.strokeWeight(1);
    
    for (let i = 1; i <= currentMin; i++) {
      let pt = points[i];

      if (i > 0) {
        p.stroke(255, 255, 200, 50);
        p.line(points[i-1].x, points[i-1].y, pt.x, pt.y);
      }

      let twinkle = p.map(p.sin(p.frameCount * 0.05 + i), -1, 1, 150, 255);

      if (pt.isKey) {
        p.fill(255, 215, 0, twinkle);
        p.noStroke();
        p.circle(pt.x, pt.y, 8 + p.sin(p.frameCount * 0.1) * 2);
      } else {
        p.fill(255, twinkle);
        p.noStroke();
        p.circle(pt.x, pt.y, 4);
      }
    }
  }

  function drawUI(name, m) {
    p.fill(100, 200, 220);
    p.noStroke();
    p.textSize(22);
    p.textStyle(p.ITALIC);
    p.text(`${name} Rising: ${m + 1} / 60 stars`, p.width/2, p.height - 150);
  }

  function getConstellationName(h) {
    if (h === 0) return "Phoenix";
    if (h >= 1 && h < 5) return "Owl";
    if (h === 6) return "Rooster";
    return "The Wanderer";
  }
});