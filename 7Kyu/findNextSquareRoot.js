// Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(num){
  var newNum = Math.sqrt(num)
  if(newNum % 1 !== 0){
    return -1
  } else{
    var nextSquare = (newNum + 1) * (newNum + 1)
    return nextSquare;
  }
}
findNextSquare(121)
