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

// Player Role Weightings
// (Each number in the arrays corresponds to an index in the playerStats array)
playerRoles = {
  gk: {
    "Goalkeeper":
      [0,1,6,8,9,17,18,20,25,29],
    "Sweeper Keeper":
      [0,1,2,3,6,9,10,17,18,19,20,25,28,29,33]
  },
  sw: {
    "Sweeper":
      [6,9,10,12,15,17,18,20,25,28,30,31],
    "Librero (support)":
      [2,6,9,10,12,15,17,18,19,20,25,26,28,30,31],
    "Librero (attack)":
      [2,6,7,9,10,12,15,17,18,19,20,25,26,28,30,31]
  },
  dc: {
    "Central Defender (defend)":
      [6,9,12,17,18,20,21,25,31,35],
    "Central Defender (stopper)":
      [6,9,12,14,16,17,18,20,21,25,31,35],
    "Central Defender (cover)":
      [6,9,12,15,17,18,20,21,25,28,31,35],
    "Ball-Playing Defender (defend)":
      [6,9,10,12,13,17,18,19,20,21,25,31,35],
    "Ball-Player Defender (stopper)":
      [6,9,10,12,13,15,16,17,8,19,20,21,25,31,35],
    "Ball-Playing Defender (cover)":
      [6,9,10,12,13,15,17,18,19,20,21,25,28,31,35],
    "Limited Defender (defend)":
      [9,12,21,25,31,35],
    "Limited Defender (stopper)":
      [9,12,14,16,21,25,31,35],
    "Limited Defender (cover)":
      [9,12,15,21,25,28,31,35]
  },
  dlr: {
    "Fullback (defend)":
      [9,12,15,18,25,26,27,28,34],
    "Fullback (support)":
      [1,9,12,15,18,25,26,27,28,34],
    "Fullback (attack)":
      [1,2,9,12,15,18,24,25,26,27,28,34],
    "Wingback (defend)":
      [9,12,20,25,26,27,28,34],
    "Wingback (support)":
      [1,9,12,20,25,26,27,28,34],
    "Wingback (attack)":
      [1,2,9,12,20,24,25,26,27,28,34]
  },
  wblr: {
    "Wingback (defend)":
      [9,12,20,25,26,27,28,34],
    "Wingback (support)":
      [1,9,12,20,25,26,27,28,34],
    "Wingback (attack)":
      [1,2,9,12,20,24,25,26,27,28,34]
  },
  dmc: {
    "Defensive Midfielder (defend)":
      [9,12,18,20,25,26,27,28,34,35],
    "Defensive Midfielder (support)":
      [9,10,12,20,25,26,27,28,34,35],
    "Deep-Lying Playmaker (defend)":
      [9,10,12,13,17,19,20,25,26,35],
    "Deep-Lying Playmaker (support)":
      [4,10,12,13,17,19,20,24,25,26],
    "Anchor Man":
      [6,9,12,15,18,20,21,25,27,35]
  },
  mc: {
    "Deep-Lying Playmaker (defend)":
      [9,10,12,13,17,19,20,25,26,35],
    "Deep-Lying Playmaker (support)":
      [4,10,12,13,17,19,20,24,25,26],
    "Central Midfielder (defend)":
      [4,6,9,10,12,20,21,25,26,27],
    "Central Midfielder (support)":
      [4,7,9,10,12,19,20,21,24,25,26,27],
    "Central Midfielder (attack)":
      [2,3,4,7,10,19,20,21,24,26,27],
    "Ball-Winning Midfielder (defend)":
      [9,12,14,16,21,25,26,27,34,35],
    "Ball-Winning Midfielder (support)":
      [9,10,12,14,16,21,26,27,34,35],
    "Box-to-Box Midfielder":
      [2,3,4,6,7,9,10,13,15,16,20,21,24,25,27,28,34,35],
    "Advanced PLaymaker (support)":
      [4,10,13,19,20,22,26,27,34],
    "Advanced Playmaker (attack)":
      [2,4,10,13,15,19,20,22,24,26]
  },
  mlr: {
    "Wide Midfielder":
      [1,10,12,15,20,21,24,26,27,34],
    "Winger":
      [1,2,13,20,22,24,28,29,30,33],
    "Defensive Winger":
      [1,2,9,12,13,20,26,27,33,34]
  },
  amlr: {
    "Winger":
      [1,2,13,20,22,24,28,29,30,33],
    "Inside Forward (support)":
      [2,7,10,13,20,22,24,26,28,33],
    "Inside Forward (attack)":
      [1,2,3,10,20,22,24,26,28,33],
    "Advanced PLaymaker (support)":
      [4,10,13,19,20,22,26,27,34],
    "Advanced Playmaker (attack)":
      [2,4,10,13,15,19,20,22,24,26]
  },
  amc: {
    "Advanced PLaymaker (support)":
      [4,10,13,19,20,22,26,27,34],
    "Advanced Playmaker (attack)":
      [2,4,10,13,15,19,20,22,24,26],
    "Inside Forward (support)":
      [2,7,10,13,20,22,24,26,28,33],
    "Inside Forward (attack)":
      [1,2,3,10,20,22,24,26,28,33],
    "Attacking Midfielder (support)":
      [4,7,10,13,19,20,22,26,27,30],
    "Attacking Midfielder (attack)":
      [2,4,10,13,19,20,22,24,27,28],
    "Trequartista":
      [3,4,9,13,15,17,19,22,24,29]
  },
  st: {
    "Deep-Lying Forward (support)":
      [2,4,7,10,13,19,20,24,26,35],
    "Deep-Lying Forward (attack)":
      [3,4,10,13,15,17,19,20,24,30],
    "Advanced Forward":
      [1,2,3,6,15,17,22,24,27,33],
    "Target Man (support)":
      [4,6,7,14,16,21,26,27,31,35],
    "Target Man (attack)":
      [3,4,6,15,16,21,26,27,31,35],
    "Poacher":
      [2,3,4,15,17,24,28,29,30,33],
    "Complete Forward":
      [2,3,4,6,7,10,13,15,17,19,20,21,24,26,28,29,30,31,33,35],
    "Defensive Forward (support)":
      [4,7,9,10,12,26,27,33,34,35],
    "Defensive Forward (attack)":
      [3,9,12,15,17,24,26,27,34,35],
    "Trequartista":
      [3,4,9,13,15,17,19,22,24,29]
  }
},
  
calculateButton = document.getElementById('calculate');

// Run calculateAbility when calculateButton is clicked
calculateButton.addEventListener('click', function() {
  var ability = calculateAbility();

// Show results in DOM
  var results = document.getElementById('results');
  // Remove current elements from results div
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  // Create a List for the roles and corresponding ability
  resultsList = document.createElement('ul');
  for (role in ability) {
    resultsItem = document.createElement('li');
    resultsRole = document.createElement('span');
    resultsItemText = document.createTextNode( ability[role] );
    resultsRoleText = document.createTextNode( role + ": " );
    
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
  var abilityPosition = {}, abilityAverage = 0, playerPosition = playerRoles[ getPositionValue() ];
  
  // Call mapStats function
  mapStats();

  // Calculate average ability
  for(i = 0; i < playerStats.length; i++) {
    // Find the sum of all playerStats
    abilityAverage =  abilityAverage + playerStats[ i ];
  }
  // Divide the sum)}f all playerStats by the number of stats
  abilityAverage = abilityAverage / 36;

  // Calculate the ability for each role for a specified position
  for (var role in playerPosition) {
    abilityPosition[role] = 0;
    for(i = 0; i < playerPosition[role].length; i++) {
      // For each positional role find the sum of all weighted stats
      abilityPosition[role] += playerStats[ playerPosition[role][i] ];
    }
    // Divide the sum for each role by the number of weighted stats
    abilityPosition[role] = abilityPosition[role] / playerPosition[role].length;
    // The sum of average ability and positional ability divided by 2
    abilityPosition[role] = (abilityPosition[role] + abilityAverage) / 2;
    // Multiply final value by 5 to get a percentage (as stats are n out of 20)
    abilityPosition[role] = abilityPosition[role] * 5;
    // Round to nearest whole number
    abilityPosition[role] = parseInt(abilityPosition[role], 10);
  }
  return abilityPosition;
};
