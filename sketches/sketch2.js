// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {
  const horizonY = 450;
  const margin = 60;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textAlign(p.CENTER, p.CENTER);;
  };

  p.draw = function () {
    // collecting time variables
    let h = p.hour();
    let m = p.minute();
    let s = p.second();

    // converting to a single decimal val for smooth mvmt
    let totalHours = h + (m / 60) + (s / 3600);

    // 1) draw environment
    p.background(210, 240, 245);
    
    // 2) draw celestial body
    let sunPos = getSunPosition(totalHours);
    drawSun(sunPos.x, sunPos.y);
    
    // 3) draw landscape
    drawTimeline();
    drawCategories(h);
  };

  function getSunPosition(time) {
    let x = p.map(time, 0, 24, margin, p.width - margin);
    let angle = p.map(time, 0, 24, 0, p.PI);
    let arcHeight = 330; 
    let y = horizonY - p.sin(angle) * arcHeight;
    return { x, y };
  }

  function drawSun(x, y) {
    p.noStroke();
    p.fill(255, 204, 0);
    p.circle(x, y, 70);
  }

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

  function drawCategories(currentHour) {
    let categories = [
      { name: "Midnight", col: [60, 60, 80], h: 0 },    // start of the 24h cycle
      { name: "Dawn",     col: [255, 160, 100], h: 6 }, // sunrise
      { name: "Day",      col: [135, 206, 235], h: 10 },// morning light
      { name: "Noon",     col: [50, 180, 230], h: 12 }, // peak sun
      { name: "Dusk",     col: [230, 90, 70], h: 18 },  // sunset
      { name: "Eve",      col: [40, 50, 110], h: 21 },  // twilight
      { name: "Night",    col: [20, 20, 40], h: 23 }    // late night
    ];

    let spacing = p.width / categories.length;

    categories.forEach((cat, i) => {
      let x = i * spacing + (spacing / 2);
      let y = 720;

      // color box
      p.fill(cat.col);
      p.noStroke();
      p.rect(x - 35, y, 70, 18, 4);

      // lavel
      p.fill(0);
      p.textStyle(p.BOLD);
      p.text(cat.name, x, y + 40);

      // current time indicator (triangle)
      // check if current hour falls within this category's rough window
      if (currentHour === cat.h || (currentHour >= cat.h - 1 && currentHour <= cat.h + 1)) {
        p.fill(180, 0, 0);
        p.triangle(x, y - 10, x - 7, y - 22, x + 7, y - 22);
      }
    });
  }

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
