const SCORE_REF = {
  90: 'A',
  80: 'B',
  70: 'C',
  60: 'D',
  0: 'F',
}

function getGrade(...scores) {
  let aveScore = scores.reduce((a, b) => a + b) / scores.length;
  let scoreArray = Object.keys(SCORE_REF);
  let filteredScores = scoreArray.filter(minScore => aveScore >= minScore);
  let key = Math.max(...filteredScores);
  return SCORE_REF[key];
}




getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

/*

calculate the avearge
check where the average falls into in the range
check if the averesult is above the keyvalue
*/