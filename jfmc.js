/* Create playerStats array

playerStats array key:
  [0]   = corners (aerial ability)
  [1]   = crossing (command of box)
  [2]   = dribling (communication)
  [3]   = finishing (eccentricity)
  [4]   = first touch
  [5]   = free kicks
  [6]   = heading (handling)
  [7]   = long shots (kicking)
  [8]   = long throws (one on ones)
  [9]   = marking (relfexes)
  [10]  = passing (rushing out)
  [11]  = penalty taking
  [12]  = tackling (punching)
  [13]  = technique (throwing)

  [14]  = aggression
  [15]  = anticipation
  [16]  = bravery
  [17]  = composure
  [18]  = concentration
  [19]  = creativity
  [20]  = decisions
  [21]  = determination
  [22]  = flair
  [23]  = influence
  [24]  = off the ball
  [25]  = positioning
  [26]  = teamwork
  [27]  = work rate

  [28]  = acceleration
  [29]  = agility
  [30]  = balance
  [31]  = jumping
  [32]  = natural fitness
  [33]  = pace
  [34]  = stamina
  [35]  = strength
*/
var playerStats = [],

// Player Roles
// (Each number in the arrays corresponds to an index in the playerStats array)
playerRoles = [
  {
    name: "Goalkeeper",
    attr: [0,1,6,8,9,17,18,20,25,29],
    pos:  "gk"
  }, {
    name: "Sweeper Keeper",
    attr: [0,1,2,3,6,9,10,17,18,19,20,25,28,29,33],
    pos:  "gk"
  }, {
    name: "Sweeper",
    attr: [6,9,10,12,15,17,18,20,25,28,30,31],
    pos:  "sw"
  }, {
    name: "Librero (support)",
    attr: [2,6,9,10,12,15,17,18,19,20,25,26,28,30,31],
    pos:  "sw"
  }, {
    name: "Librero (attack)",
    attr: [2,6,7,9,10,12,15,17,18,19,20,25,26,28,30,31],
    pos:  "sw"
  }, {
    name: "Central Defender (defend)",
    attr: [6,9,12,17,18,20,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Central Defender (stopper)",
    attr: [6,9,12,14,16,17,18,20,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Central Defender (cover)",
    attr: [6,9,12,15,17,18,20,21,25,28,31,35],
    pos:  "dc"
  }, {
    name: "Ball-Playing Defender (defend)",
    attr: [6,9,10,12,13,17,18,19,20,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Ball-Player Defender (stopper)",
    attr: [6,9,10,12,13,15,16,17,8,19,20,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Ball-Playing Defender (cover)",
    attr: [6,9,10,12,13,15,17,18,19,20,21,25,28,31,35],
    pos:  "dc"
  }, {
    name: "Limited Defender (defend)",
    attr: [9,12,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Limited Defender (stopper)",
    attr: [9,12,14,16,21,25,31,35],
    pos:  "dc"
  }, {
    name: "Limited Defender (cover)",
    attr: [9,12,15,21,25,28,31,35],
    pos:  "dc"
  }, {
    name: "Fullback (defend)",
    attr: [9,12,15,18,25,26,27,28,34],
    pos:  "dlr"
  }, {
    name: "Fullback (support)",
    attr: [1,9,12,15,18,25,26,27,28,34],
    pos:  "dlr"
  }, {
    name: "Fullback (attack)",
    attr: [1,2,9,12,15,18,24,25,26,27,28,34],
    pos:  "dlr"
  }, {
    name: "Wingback (defend)",
    attr: [9,12,20,25,26,27,28,34],
    pos:  "dlr wblr"
  }, {
    name: "Wingback (support)",
    attr: [1,9,12,20,25,26,27,28,34],
    pos:  "dlr wblr"
  }, {
    name: "Wingback (attack)",
    attr: [1,2,9,12,20,24,25,26,27,28,34],
    pos:  "dlr wblr"
  }, {
    name: "Defensive Midfielder (defend)",
    attr: [9,12,18,20,25,26,27,28,34,35],
    pos:  "dm"
  }, {
    name: "Defensive Midfielder (support)",
    attr: [9,10,12,20,25,26,27,28,34,35],
    pos:  "dm"
  }, {
    name: "Deep-Lying Playmaker (defend)",
    attr: [9,10,12,13,17,19,20,25,26,35],
    pos:  "dm mc"
  }, {
    name: "Deep-Lying Playmaker (support)",
    attr: [4,10,12,13,17,19,20,24,25,26],
    pos:  "dm mc"
  }, {
    name: "Anchor Man",
    attr: [6,9,12,15,18,20,21,25,27,35],
    pos:  "dm"
  }, {
    name: "Central Midfielder (defend)",
    attr: [4,6,9,10,12,20,21,25,26,27],
    pos:  "mc"
  }, {
    name: "Central Midfielder (support)",
    attr: [4,7,9,10,12,19,20,21,24,25,26,27],
    pos:  "mc"
  }, {
    name: "Central Midfielder (attack)",
    attr: [2,3,4,7,10,19,20,21,24,26,27],
    pos:  "mc"
  }, {
    name: "Ball-Winning Midfielder (defend)",
    attr: [9,12,14,16,21,25,26,27,34,35],
    pos:  "mc"
  }, {
    name: "Ball-Winning Midfielder (support)",
    attr: [9,10,12,14,16,21,26,27,34,35],
    pos:  "mc"
  }, {
    name: "Box-to-Box Midfielder",
    attr: [2,3,4,6,7,9,10,13,15,16,20,21,24,25,27,28,34,35],
    pos:  "mc"
  }, {
    name: "Advanced Playmaker (support)",
    attr: [4,10,13,19,20,22,26,27,34],
    pos:  "mc amc amlr"
  }, {
    name: "Advanced Playmaker (attack)",
    attr: [2,4,10,13,15,19,20,22,24,26],
    pos:  "mc amc amlr"
  }, {
    name: "Wide Midfielder",
    attr: [1,10,12,15,20,2,24,26,27,34],
    pos:  "mlr"
  }, {
    name: "Winger",
    attr: [1,2,13,20,22,24,28,29,30,33],
    pos:  "mlr amlr"
  }, {
    name: "Defensive Winger",
    attr: [1,2,9,12,13,20,26,27,33,34],
    pos:  "mlr"
  }, {
    name: "Inside Forward (support)",
    attr: [2,7,10,13,20,22,24,26,28,33],
    pos:  "amc amlr"
  }, {
    name: "Inside Forward (attack)",
    attr: [1,2,3,10,20,22,24,26,28,33],
    pos:  "amc amlr"
  }, {
    name: "Attacking Midfielder (support)",
    attr: [4,7,10,13,19,20,22,26,27,30],
    pos:  "amc"
  }, {
    name: "Attacking Midfielder (attack)",
    attr: [2,4,10,13,19,20,22,24,27,28],
    pos:  "amc"
  }, {
    name: "Trequartista",
    attr: [3,4,9,13,15,17,19,22,24,29],
    pos:  "amc st"
  }, {
    name: "Deep-Lying Forward (support)",
    attr: [2,4,7,10,13,19,20,24,26,35],
    pos:  "st"
  }, {
    name: "Deep-Lying Forward (attack)",
    attr: [3,4,10,13,15,17,19,20,24,30],
    pos: "st"
  }, {
    name: "Advanced Forward",
    attr: [1,2,3,6,15,17,22,24,27,33],
    pos: "st"
  }, {
    name: "Target Man (support)",
    attr: [4,6,7,14,16,21,26,27,31,35],
    pos: "st"
  }, {
    name: "Target Man (attack)",
    attr: [3,4,6,15,16,21,26,27,31,35],
    pos: "st"
  }, {
    name: "Poacher",
    attr: [2,3,4,15,17,24,28,29,30,33],
    pos: "st"
  }, {
    name: "Complete Forward",
    attr: [2,3,4,6,7,10,13,15,17,19,20,21,24,26,28,29,30,31,33,35],
    pos: "st"
  }, {
    name: "Defensive Forward (support)",
    attr: [4,7,9,10,12,26,27,33,34,35],
    pos: "st"
  }, {
    name: "Defensive Forward (attack)",
    attr: [3,9,12,15,17,24,26,27,34,35],
    pos: "st"
  }
],
  
calculateButton = document.getElementById('calculate');

// Run calculateAbility when calculateButton is clicked
calculateButton.addEventListener('click', function() {

  //Sort results from calculateAbility
  var ability = calculateAbility().sort(sortRoles),

  // Show results in DOM
  results = document.getElementById('results');
  // Remove current elements from results div
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  // Create a List for the roles and corresponding ability
  resultsList = document.createElement('ul');
  for( i = 0; i < ability.length; i++) {
    resultsItem = document.createElement('li');
    resultsRole = document.createElement('span');
    resultsItemText = document.createTextNode( ability[i]["ability"] );
    resultsRoleText = document.createTextNode( ability[i]["role"] + ": " );
    
    resultsRole.appendChild( resultsRoleText );
    resultsItem.appendChild( resultsRole );
    resultsItem.appendChild( resultsItemText );
    resultsList.appendChild( resultsItem )
  }
  results.appendChild(resultsList);

}, false);

// Function to check value of position radio buttons
function getPositionValue() {
  var positionRadio = document.forms[0].elements['position'];
   for(var i = 0; i < positionRadio.length; i++)
   {
      if(positionRadio[i].checked)
      {
         return positionRadio[i].value;
      }
   }
   return '';
}

// Function to map stats from form to playerStats array
function mapStats() {
  var statArray = document.getElementsByClassName('stat');
    
  for(i = 0; i < statArray.length; i++ ){
    playerStats[ i ] = Number(statArray[ i ].value);
  };
};

// Function to calculate positional ability
function calculateAbility() {
  var abilityAverage = 0,
      
  // Filter out playerRoles for selected position
    playerPosition = playerRoles.filter(function (el) {
      return el.pos.search(new RegExp("\\b"+getPositionValue()+"\\b")) != -1;
    });
  ;
  
  // Call mapStats function
  mapStats();

  // Calculate average ability
  for(i = 0; i < playerStats.length; i++) {
    // Find the sum of all playerStats
    abilityAverage =  abilityAverage + playerStats[ i ];
  }
  // Divide the sum of all playerStats by the number of stats
  abilityAverage = abilityAverage / 36;

  // Reset abilityPosition
  abilityPosition = [];

  // Calculate the ability for each role in selected position
  for (i = 0; i < playerPosition.length; i++) {
    var attr = playerPosition[i]["attr"],
        abilityRole = 0;

    // Find the sum of weighted attributes for each role in selected position
    for(x = 0; x < attr.length; x++) {
      abilityRole += playerStats[attr[x]];
    }
    // Divide sum of weighted attributes by quantity (multiplying by 100 to avoid rounding errors)
    abilityRole = (abilityRole * 100) / attr.length;
    abilityRole = abilityRole / 100;

    // Find the mean of abilityAverage and abilityRole
    abilityRole += abilityAverage;
    abilityRole = abilityRole / 2

    // Multiply to get a percentage (100/20 = 5)
    abilityRole = abilityRole * 5;

    // Round to nearest whole number
    abilityRole = parseInt(abilityRole, 10);

    // Log to abilityPosition
    abilityPosition[i] = {
      role: playerPosition[i].name,
      ability: abilityRole
    };
  }
  return abilityPosition;
};

function sortRoles(a,b) {
  return parseInt(b.ability) - parseInt(a.ability);
};
