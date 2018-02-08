function grammarPolice(str){
  var splitStr = str.split(' ')
  var solution = []

  for (var i = 0; i < splitStr.length; i++){
    var word = []
    word.push(splitStr[i][0].toUpperCase())
    for (var j = 1; j < splitStr[i].length; j++) {
      word.push(splitStr[i][j].toLowerCase())
    }


    word = word.join("")
    solution.push(word)
  }
  return solution.join(" ")
}

grammarPolice("OH HELLO THERE")
