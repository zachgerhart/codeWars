
// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND


function songDecoder (str) {
  newStr = str.split("WUB")
  for(var i = 0; i < newStr.length; i++) {
    if(newStr[i] === ""){
      newStr.splice(i,1)
      i -= 2
    }

  }
    return newStr.join(" ");

}
songDecoder("WUBWUBIWUBAMWUBWUBX") //==> I AM X
