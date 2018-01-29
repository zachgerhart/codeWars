// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
  var newStr = ""
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
      newStr += str[i]
      //console.log(newStr)
    }
  }
  return newStr;
}
disemvowel("This website is for losers LOL!")
