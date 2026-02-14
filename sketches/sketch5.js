registerSketch('sk5', function (p) {
  // --- HARDCODED DATA ---
  // I had to hardcode the data since whenever I tried to load in my data file here, it would just say loading on the website
  // Loading in the file worked perfectly on the web editor version of P5 js but not here locally
  const rawData = [
    {"Madden_Title": "Madden NFL 2000", "Athlete_Name": "Barry Sanders", "year": 1999, "pos": "RB", "Team": "Detroit Lions", "gpBefore": 16, "gpAfter": 0, "avBefore": 15, "avAfter": 0, "injuryLevel": 0, "injuryDesc": "Retired before season start", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/5/57/Madden_NFL_2000_Coverart.png"},
    {"Madden_Title": "Madden NFL 2001", "Athlete_Name": "Eddie George", "year": 2000, "pos": "RB", "Team": "Tennessee Titans", "gpBefore": 16, "gpAfter": 16, "avBefore": 14, "avAfter": 6, "injuryLevel": 1, "injuryDesc": "Turf toe injury limited performance", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/2/2b/Madden_NFL_2001_Coverart.png"},
    {"Madden_Title": "Madden NFL 2002", "Athlete_Name": "Daunte Culpepper", "year": 2001, "pos": "QB", "Team": "Minnesota Vikings", "gpBefore": 11, "gpAfter": 16, "avBefore": 11, "avAfter": 16, "injuryLevel": 3, "injuryDesc": "Knee injury (missed 5 games)", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a0/Madden_NFL_2002_Coverart.png"},
    {"Madden_Title": "Madden NFL 2003", "Athlete_Name": "Marshall Faulk", "year": 2002, "pos": "RB", "Team": "St. Louis Rams", "gpBefore": 14, "gpAfter": 11, "avBefore": 15, "avAfter": 11, "injuryLevel": 2, "injuryDesc": "Ankle/Knee injuries", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/7/75/Madden2003Box.jpg"},
    {"Madden_Title": "Madden NFL 2004", "Athlete_Name": "Michael Vick", "year": 2003, "pos": "QB", "Team": "Atlanta Falcons", "gpBefore": 5, "gpAfter": 15, "avBefore": 3, "avAfter": 15, "injuryLevel": 3, "injuryDesc": "Fractured fibula in preseason", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/98/Madden2004box.jpg"},
    {"Madden_Title": "Madden NFL 2005", "Athlete_Name": "Ray Lewis", "year": 2004, "pos": "LB", "Team": "Baltimore Ravens", "gpBefore": 15, "gpAfter": 6, "avBefore": 18, "avAfter": 6, "injuryLevel": 3, "injuryDesc": "Wrist injury (missed 1 game/Playoffs)", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/5/58/Madden_NFL_2005_Coverart.png"},
    {"Madden_Title": "Madden NFL 2006", "Athlete_Name": "Donovan McNabb", "year": 2005, "pos": "QB", "Team": "Philadelphia Eagles", "gpBefore": 9, "gpAfter": 10, "avBefore": 10, "avAfter": 11, "injuryLevel": 3, "injuryDesc": "Sports hernia / ACL Tear", "category": "Slight Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/36/Madden06.jpg"},
    {"Madden_Title": "Madden NFL 2007", "Athlete_Name": "Shaun Alexander", "year": 2006, "pos": "RB", "Team": "Seattle Seahawks", "gpBefore": 10, "gpAfter": 13, "avBefore": 10, "avAfter": 5, "injuryLevel": 3, "injuryDesc": "Broken foot", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/97/Madden_NFL_07_Coverart.png"},
    {"Madden_Title": "Madden NFL 2008", "Athlete_Name": "Vince Young", "year": 2007, "pos": "QB", "Team": "Tennessee Titans", "gpBefore": 15, "gpAfter": 3, "avBefore": 13, "avAfter": 3, "injuryLevel": 1, "injuryDesc": "Quad injury", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4c/Madden_NFL_08_Coverart.png"},
    {"Madden_Title": "Madden NFL 2009", "Athlete_Name": "Brett Favre", "year": 2008, "pos": "QB", "Team": "Green Bay Packers", "gpBefore": 16, "gpAfter": 16, "avBefore": 13, "avAfter": 17, "injuryLevel": 1, "injuryDesc": "Biceps Tear (played through)", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/6d/Madden_NFL_09_Coverart.jpg"},
    {"Madden_Title": "Madden NFL 2010", "Athlete_Name": "Troy Polamalu", "year": 2009, "pos": "SS", "Team": "Pittsburgh Steelers", "gpBefore": 5, "gpAfter": 14, "avBefore": 3, "avAfter": 17, "injuryLevel": 3, "injuryDesc": "MCL sprain (missed most of season)", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/69/Madden10_Xbox360.jpg"},
    {"Madden_Title": "Madden NFL 2010", "Athlete_Name": "Larry Fitzgerald", "year": 2009, "pos": "WR", "Team": "Arizona Cardinals", "gpBefore": 16, "gpAfter": 16, "avBefore": 12, "avAfter": 10, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/69/Madden10_Xbox360.jpg"},
    {"Madden_Title": "Madden NFL 2011", "Athlete_Name": "Drew Brees", "year": 2010, "pos": "QB", "Team": "New Orleans Saints", "gpBefore": 16, "gpAfter": 16, "avBefore": 15, "avAfter": 21, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4b/Madden_11_Drew_Brees_cover.jpg"},
    {"Madden_Title": "Madden NFL 2012", "Athlete_Name": "Peyton Hillis", "year": 2011, "pos": "RB", "Team": "Cleveland Browns", "gpBefore": 10, "gpAfter": 13, "avBefore": 6, "avAfter": 4, "injuryLevel": 2, "injuryDesc": "Hamstring/Strep throat issues", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/b/bc/Madden_12_official_cover.jpg"},
    {"Madden_Title": "Madden NFL 2013", "Athlete_Name": "Calvin Johnson", "year": 2012, "pos": "WR", "Team": "Detroit Lions", "gpBefore": 16, "gpAfter": 14, "avBefore": 17, "avAfter": 14, "injuryLevel": 1, "injuryDesc": "Fingers/Knee (played through)", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a1/Madden_NFL_13_cover.png"},
    {"Madden_Title": "Madden NFL 25", "Athlete_Name": "Barry Sanders", "year": 2013, "pos": "RB", "Team": "Detroit Lions", "gpBefore": 0, "gpAfter": 0, "avBefore": 0, "avAfter": 0, "injuryLevel": 0, "injuryDesc": "None", "category": "No Change", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/2/25/Madden_NFL_25_Next-Gen.jpeg"},
    {"Madden_Title": "Madden NFL 2015", "Athlete_Name": "Richard Sherman", "year": 2014, "pos": "CB", "Team": "Seattle Seahawks", "gpBefore": 16, "gpAfter": 16, "avBefore": 18, "avAfter": 12, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/2/2a/Madden_15_Cover_Featuring_Richard_Sherman.png"},
    {"Madden_Title": "Madden NFL 2016", "Athlete_Name": "Odell Beckham Jr.", "year": 2015, "pos": "WR", "Team": "New York Giants", "gpBefore": 15, "gpAfter": 16, "avBefore": 14, "avAfter": 14, "injuryLevel": 0, "injuryDesc": "None", "category": "No Change", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/f/f7/Odell_Beckham_Jr._Madden_NFL_16_Cover.jpg"},
    {"Madden_Title": "Madden NFL 2017", "Athlete_Name": "Rob Gronkowski", "year": 2016, "pos": "TE", "Team": "New England Patriots", "gpBefore": 8, "gpAfter": 14, "avBefore": 7, "avAfter": 14, "injuryLevel": 3, "injuryDesc": "Back Surgery (missed 8 games)", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/61/Madden_NFL_17_cover.jpeg"},
    {"Madden_Title": "Madden NFL 2018", "Athlete_Name": "Tom Brady", "year": 2017, "pos": "QB", "Team": "New England Patriots", "gpBefore": 16, "gpAfter": 16, "avBefore": 20, "avAfter": 15, "injuryLevel": 0, "injuryDesc": "None (Won MVP)", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/5/58/Madden18GOAT.jpg"},
    {"Madden_Title": "Madden NFL 2019", "Athlete_Name": "Antonio Brown", "year": 2018, "pos": "WR", "Team": "Pittsburgh Steelers", "gpBefore": 15, "gpAfter": 1, "avBefore": 13, "avAfter": 1, "injuryLevel": 3, "injuryDesc": "Conduct issues / Left Team", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/6d/Madden19cover.jpeg"},
    {"Madden_Title": "Madden NFL 2020", "Athlete_Name": "Patrick Mahomes", "year": 2019, "pos": "QB", "Team": "Kansas City Chiefs", "gpBefore": 14, "gpAfter": 15, "avBefore": 14, "avAfter": 16, "injuryLevel": 2, "injuryDesc": "Knee Dislocation (missed 2 games)", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4d/Madden_20_decalless_cover_art.jpg"},
    {"Madden_Title": "Madden NFL 2021", "Athlete_Name": "Lamar Jackson", "year": 2020, "pos": "QB", "Team": "Baltimore Ravens", "gpBefore": 15, "gpAfter": 12, "avBefore": 18, "avAfter": 12, "injuryLevel": 1, "injuryDesc": "Knee/Back (played through)", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/5/55/Madden21cover.jpeg"},
    {"Madden_Title": "Madden NFL 2022", "Athlete_Name": "Patrick Mahomes", "year": 2021, "pos": "QB", "Team": "Kansas City Chiefs", "gpBefore": 17, "gpAfter": 17, "avBefore": 18, "avAfter": 20, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4c/Madden_22_cover.jpg"},
    {"Madden_Title": "Madden NFL 2022", "Athlete_Name": "Tom Brady", "year": 2021, "pos": "QB", "Team": "Tampa Bay Buccaneers", "gpBefore": 17, "gpAfter": 17, "avBefore": 17, "avAfter": 11, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4c/Madden_22_cover.jpg"},
    {"Madden_Title": "Madden NFL 2023", "Athlete_Name": "John Madden", "year": 2022, "pos": "Head Coach", "Team": "-", "gpBefore": 0, "gpAfter": 0, "avBefore": 0, "avAfter": 0, "injuryLevel": 0, "injuryDesc": "Deceased (Legacy Cover)", "category": "No Change", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/7/71/Madden_23_cover.jpeg"},
    {"Madden_Title": "Madden NFL 2024", "Athlete_Name": "Josh Allen", "year": 2023, "pos": "QB", "Team": "Buffalo Bills", "gpBefore": 17, "gpAfter": 17, "avBefore": 19, "avAfter": 18, "injuryLevel": 0, "injuryDesc": "None", "category": "Slight Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/b/b0/Madden_NFL_24_Cover.jpeg"},
    {"Madden_Title": "Madden NFL 2025", "Athlete_Name": "Christian McCaffery", "year": 2024, "pos": "RB", "Team": "San Francisco 49ers", "gpBefore": 4, "gpAfter": 17, "avBefore": 4, "avAfter": 18, "injuryLevel": 3, "injuryDesc": "Achilles/PCL injury", "category": "Significant Increase", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/c/c0/Madden_NFL_25_%282024%29_cover.png"},
    {"Madden_Title": "Madden NFL 2026", "Athlete_Name": "Saquon Barkley", "year": 2025, "pos": "RB", "Team": "Philadelphia Eagles", "gpBefore": 17, "gpAfter": 0, "avBefore": 18, "avAfter": 9, "injuryLevel": 0, "injuryDesc": "None", "category": "Significant Decrease", "imgUrl": "https://upload.wikimedia.org/wikipedia/en/8/8b/Madden_NFL_26_cover.jpg"},
  ];

let athletes = [];
let scrollX = 0;
let targetScrollX = 0;
// attempted to optimize instagram dimensions
let cardWidth = 850; 
let cardGap = 80;
// using constants to optimize for IG dims -- still wanted to make it look good for web view for website
const INSTA_W = 1080;
const INSTA_H = 1920;
// allows for toggle mode
let isBelieverMode = true;

p.preload = function () {
  rawData.forEach(d => {
    let athleteObj = {...d};
    athleteObj.img = p.loadImage(d.imgUrl, null, () => { athleteObj.img = null; });
    athletes.push(athleteObj);
  });
};

p.setup = function () {
  p.createCanvas(p.windowWidth, p.windowHeight);
};

p.draw = function () {
  let bgPulse = p.sin(p.frameCount * 0.02) * 10;
  p.background(isBelieverMode ? [25 + bgPulse, 10, 15] : [10, 25 + bgPulse, 15]);

  let scaleFactor = p.min(p.width / INSTA_W, p.height / INSTA_H);
  p.push();
  p.translate(p.width / 2, p.height / 2);
  p.scale(scaleFactor);
  p.translate(-INSTA_W / 2, -INSTA_H / 2);

  scrollX = p.lerp(scrollX, targetScrollX, 0.1);

  drawHeader(p);
  drawLegend(p);
  drawToggle(p);

  p.push();
  p.translate(scrollX + 115, 520); 
  athletes.forEach((data, i) => {
    let x = i * (cardWidth + cardGap);
    let col = getStatusColor(data.category);
    let isDimmed = (isBelieverMode && !data.category.includes("Decrease")) || (!isBelieverMode && !data.category.includes("Increase"));

    // card body
    p.noStroke();
    p.fill(col[0], col[1], col[2], isDimmed ? 10 : 60);
    p.rect(x - 20, -20, cardWidth + 40, 1040, 45);
    p.fill(25, 25, 45, isDimmed ? 150 : 255);
    p.stroke(255, isDimmed ? 20 : 60);
    p.rect(x, 0, cardWidth, 1000, 35);

    // --- image area ---
    let imgSize = 320;
    let imgX = x + cardWidth - imgSize - 40;
    let imgY = 160;

    if (data.img) {
      // trying to calculate aspect ratio -- had troubles with image being too big and athlete name running over it
      let aspect = data.img.width / data.img.height;
      let dw = imgSize;
      let dh = imgSize / aspect;
      if (dh > imgSize) { // preventative measure if there were fit issues -- suggested to include by Copilot 
        dh = imgSize;
        dw = imgSize * aspect;
      }
      p.imageMode(p.CENTER);
      p.image(data.img, imgX + imgSize/2, imgY + imgSize/2, dw, dh);
      p.imageMode(p.CORNER);
    } else {
      p.fill(40);
      p.rect(imgX, imgY, imgSize, imgSize, 15);
    }

    // card header
    p.noStroke();
    p.fill(col[0], col[1], col[2], isDimmed ? 100 : 255);
    p.rect(x, 0, cardWidth, 130, 35, 35, 0, 0);
    p.fill(0, 150);
    p.textAlign(p.CENTER);
    p.textSize(55);
    p.textStyle(p.BOLD);
    p.text(data.year, x + cardWidth/2, 90);

    // --- text ---
    // had issues with athlete name just laying flat in one line
    // added wrapping which would break really long names into 2 lines - line 1 = first, line 2 - last
    p.fill(255, isDimmed ? 100 : 255);
    p.textAlign(p.LEFT);
    p.textSize(32);
    p.textStyle(p.NORMAL);
    p.text(data.Madden_Title, x + 45, 195);
    
    // adding more details for name wrapping
    p.textSize(55);
    p.textStyle(p.BOLD);
    p.text(data.Athlete_Name, x + 45, 230, 420, 200); 

    p.textSize(30);
    p.textStyle(p.NORMAL);
    p.fill(160);
    p.text(data.pos.toUpperCase(), x + 45, 390);

    if (isBelieverMode && data.injuryLevel > 0) {
      p.fill(231, 76, 60);
      p.textSize(32);
      p.textStyle(p.BOLD);
      // this will only appear if believer mode is toggled on
      p.text("⚠️ CURSE ACTIVE", x + 45, 435);
    }

    // stats section
    drawStat(p, x + 45, 510, "GAMES PLAYED", data.gpBefore, data.gpAfter, 17, isDimmed);
    drawStat(p, x + 45, 740, "IMPACT (AV STAT)", data.avBefore, data.avAfter, 25, isDimmed);

    p.textSize(28);
    p.fill(200, isDimmed ? 100 : 255);
    p.text("STATUS: " + data.injuryDesc, x + 45, 935, cardWidth - 90);
  });
  p.pop();

  p.fill(255, 100);
  p.textAlign(p.CENTER);
  p.textSize(30);
  p.text("SWIPE TO EXPLORE  •  TAP TO TOGGLE VIEW", INSTA_W/3, INSTA_H - 200);
  p.pop();
};

function drawStat(p, x, y, label, b, a, max, isDimmed) {
  p.fill(180, isDimmed ? 100 : 255);
  p.textSize(32);
  p.textStyle(p.BOLD);
  p.text(label, x, y);
  
  let barW = 760;
  p.fill(80, isDimmed ? 50 : 255);
  p.rect(x, y + 35, barW, 45, 8);
  p.fill(255, isDimmed ? 50 : 80);
  p.rect(x, y + 35, p.map(b, 0, max, 0, barW), 45, 8);
  p.fill(255, isDimmed ? 100 : 255);
  p.rect(x, y + 95, p.map(a, 0, max, 0, barW), 45, 8);
  
  p.textSize(26);
  p.textStyle(p.NORMAL);
  p.text("PRE-COVER: " + b + "   |   POST-COVER: " + a, x, y + 175);
}

// --- ui comp ---
function drawHeader(p) {
  // title 
  p.fill(255); p.textAlign(p.LEFT); p.textStyle(p.BOLD); p.textSize(85);
  p.text("THE MADDEN", 60, 150);
  p.fill(isBelieverMode ? [231, 76, 60] : [46, 204, 113]); 
  p.text("CURSE", 615, 150);
  p.fill(255); p.textSize(36); p.textStyle(p.NORMAL);
  // subtitle
  p.text("Statistical Archive: " + (isBelieverMode ? "Believer View" : "Skeptic View"), 60, 215);
}

function drawLegend(p) {
  // key at the top
  let startX = 60; let startY = 300;
  let items = [{ col: [46, 204, 113], label: "Defied Curse" }, { col: [241, 196, 15], label: "Mixed Results" }, { col: [231, 76, 60], label: "Cursed" }];
  items.forEach((item, i) => {
    p.fill(item.col); p.ellipse(startX + 20, startY + (i * 55), 22, 22);
    p.fill(200); p.textSize(30); p.textAlign(p.LEFT);
    p.text(item.label, startX + 55, startY + 11 + (i * 55));
  });
}

function drawToggle(p) {
  let x = 650; let y = 300;
  p.fill(40); p.stroke(255, 50); p.rect(x, y, 360, 110, 55);
  p.noStroke(); p.fill(isBelieverMode ? [231, 76, 60] : [46, 204, 113]);
  p.rect(isBelieverMode ? x + 8 : x + 182, y + 8, 170, 94, 50);
  p.fill(255); p.textAlign(p.CENTER); p.textSize(26);
  p.text("BELIEVER", x + 93, y + 68); p.text("SKEPTIC", x + 267, y + 68);
}

function getStatusColor(cat) {
  if (cat.includes("Significant Increase")) return [46, 204, 113];
  if (cat.includes("Significant Decrease")) return [231, 76, 60];
  return [241, 196, 15];
}

// if mouse is pressed on screen, it will toggle between views
p.mousePressed = function() { isBelieverMode = !isBelieverMode; };
// initially, scroll was up and down which wasn't intuitive for right to left motion of timeline 
  // needed a function to make this work
p.mouseWheel = function (e) { targetScrollX -= (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * 2.5; targetScrollX = p.constrain(targetScrollX, -(athletes.length * (cardWidth + cardGap) - INSTA_W + 200), 0); return false; };
});