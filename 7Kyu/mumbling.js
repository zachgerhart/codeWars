// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

function accum(s) {
    let letters = s.toLowerCase().split('')
    //console.log(letters)
  for(let i = 0; i < letters.length; i++) {
    //console.log(letters[i])
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    //console.log(letters[i])
  }
  return letters.join('-')
}

accum('abcdefghijklmnopqrstuvwxyz')
