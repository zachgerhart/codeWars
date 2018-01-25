// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

function DNAStrand(str){
  let newArr = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] === "A"){
      newArr.push("T")
    } else if (str[i] === "T"){
      newArr.push("A")
    } else if (str[i] === "G"){
      newArr.push("C")
    } else if (str[i] === "C"){
      newArr.push("G")
    }
  }
  return newArr.join("")
}

DNAStrand("ATTGC");
