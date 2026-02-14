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
    let cardWidth = 400;
    let cardGap = 60;
    let hoveredIndex = -1;
  
    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
  
      // copying data to athletes array
      athletes = rawData.map(d => ({ ...d }));
    };
  
    p.draw = function () {
      p.background(20);
  
      // allowing for smooth scrolling
      scrollX = p.lerp(scrollX, targetScrollX, 0.1);
  
      // header details
      p.fill(255);
      p.textSize(32);
      p.text("Madden Cover Timeline", 50, 50);
  
      // drawing the timeline cards
      p.push();
      p.translate(scrollX + 50, 150);
  
      hoveredIndex = -1;
      athletes.forEach((data, i) => {
        let x = i * (cardWidth + cardGap);
  
        // card rectangle
        p.fill(50, 50, 80);
        p.stroke(255, 50);
        p.rect(x, 0, cardWidth, 250, 15);
  
        // text info
        p.noStroke();
        p.fill(255);
        p.textSize(18);
        p.text(data.Madden_Title, x + 15, 30);
        p.textSize(24);
        p.textStyle(p.BOLD);
        p.text(data.Athlete_Name, x + 15, 70);
        p.textStyle(p.NORMAL);
        p.fill(200);
        p.text(data.pos + " | Year: " + data.year, x + 15, 110);
      });
  
      p.pop();
    };
  
    // scrolling horizontally - previously it was vertical so a function needs to be created to implement this
    p.mouseWheel = function (event) {
      targetScrollX -= event.delta;
      let maxScroll = -(athletes.length * (cardWidth + cardGap) - p.width + 100);
      targetScrollX = p.constrain(targetScrollX, maxScroll, 0);
    };
  
    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  });