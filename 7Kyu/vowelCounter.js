// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function vowelCount (str){
var counter = 0
for (var i = 0; i < str.length; i ++) {
  if (str[i].toLowerCase() !== 'a' &&
      str[i].toLowerCase()  !== 'e' &&
      str[i].toLowerCase()  !== 'i' &&
      str[i].toLowerCase() !== 'o' &&
      str[i].toLowerCase()  !== 'u') {
        "";
      } else {
        counter ++;
      }
}
return counter ++;
}
vowelCount ('APPLE');
