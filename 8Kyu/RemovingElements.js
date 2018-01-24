// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.


function removeEveryOther (arr) {
let current = []
  return arr.filter(function(curr, index, array) {
    return index % 2 === 0
    answer.push(current)
  })
}

removeEveryOther(['keep', 'remove', 'keep', 'remove'])
