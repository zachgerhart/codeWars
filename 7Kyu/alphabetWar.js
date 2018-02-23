function alphabetWar(fight) {
  fight = fight.split('');
  let left = 0;
  let right = 0;
  let casualties = [];

  for (var i = 0; i < fight.length; i++) {

  }

  for (var j = 0; j < fight.length; j++) {
    switch (fight[j]) {
      case 'w':
        left += 4;
        break;
      case 'p':
        left += 3;
        break;
      case 'b':
        left += 2;
        break;
      case 's':
        left += 1;
        break;
      case 'm':
        right += 4;
        break;
      case 'q':
        right += 3;
        break;
      case 'd':
        right += 2;
        break;
      case 'z':
        right += 1;
        break;
      default:
        casualties.push(fight[j]);
    }
  }

  console.log(casualties, left, right)

  if (left > right) {
    return 'Left side wins!';
  } else if (right > left) {
    return 'Right side wins!';
  } else {
    return 'Let\'s fight again!';
  }
}

alphabetWar("w**xcdv*p*bb")


// left
// w - 4
// p - 3
// b - 2
// s - 1
// right
// m - 4
// q - 3
// d - 2
// z - 1
