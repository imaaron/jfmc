// Create playerStats Object
var playerStats = new Object;

// Add playerStat categories
//
// playerStats.technical array is as follows:
//  [0]  = corners (aerial ability)
//  [1]  = crossing (command of box)
//  [2]  = dribling (communication)
//  [3]  = finishing (eccentricity)
//  [4]  = first touch
//  [5]  = free kicks
//  [6]  = heading (handling)
//  [7]  = long shots (kicking)
//  [8]  = long throws (one on ones)
//  [9]  = marking (relfexes)
//  [10] = passing (rushing out)
//  [11] = penalty taking
//  [12] = tackling (punching)
//  [13] = technique (throwing)
playerStats.technical = [];

// playerStats.mental array as follows:
//  [0]  = aggression
//  [1]  = anticipation
//  [2]  = bravery
//  [3]  = composure
//  [4]  = concentration
//  [5]  = creativity
//  [6]  = decisions
//  [7]  = determination
//  [8]  = flair
//  [9]  = influence
//  [10] = off the ball
//  [11] = positioning
//  [12] = teamwork
//  [13] = work rate
playerStats.mental = [];

// playerStats.physical array as follows:
//  [0] = acceleration
//  [1] = agility
//  [2] = balance
//  [3] = jumping
//  [4] = natural fitness
//  [5] = pace
//  [6] = stamina
//  [7] = strength
playerStats.physical = [];

console.log( playerStats );
console.log( playerStats.mental );
