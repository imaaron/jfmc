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
    gk: [0,1,6,8,9,17,18,20,25,29],
    sk: [0,1,2,3,6,9,10,17,18,19,20,25,28,29,33]
  },
  sw: {
    sw: [6,9,10,12,15,17,18,20,25,28,30,31],
    ls: [2,6,9,10,12,15,17,18,19,20,25,26,28,30,31],
    la: [2,6,7,9,10,12,15,17,18,19,20,25,26,28,30,31]
  },
  dc: {
    cdd: [6,9,12,17,18,20,21,25,31,35],
    cds: [6,9,12,14,16,17,18,20,21,25,31,35],
    cdc: [6,9,12,15,17,18,20,21,25,28,31,35],
    bpdd: [6,9,10,12,13,17,18,19,20,21,25,31,35],
    bpds: [6,9,10,12,13,15,16,17,18,19,20,21,25,31,35],
    bpdc: [6,9,10,12,13,15,17,18,19,20,21,25,28,31,35],
    ldd:  [9,12,21,25,31,35],
    lds:  [9,12,14,16,21,25,31,35],
    ldc:  [9,12,15,21,25,28,31,35]
  },
  dlr: {
    fbd:  [9,12,15,18,25,26,27,28,34],
    fbs:  [1,9,12,15,18,25,26,27,28,34],
    fba:  [1,2,9,12,15,18,24,25,26,27,28,34],
    wbd:  [9,12,20,25,26,27,28,34],
    wbs:  [1,9,12,20,25,26,27,28,34],
    wba:  [1,2,9,12,20,24,25,26,27,28,34]
  },
  wblr: {
    wbd:  [9,12,20,25,26,27,28,34],
    wbs:  [1,9,12,20,25,26,27,28,34],
    wba:  [1,2,9,12,20,24,25,26,27,28,34]
  }
},
  
calculateButton = document.getElementById('calculate');

// Run calculateAbility when calculateButton is clicked
calculateButton.addEventListener('click', function() {
  calculateAbility();
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
  console.log( abilityPosition );
};
