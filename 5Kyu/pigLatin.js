// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  str = str.split(' ');

  var piggedWords = [];
  var string = '';
  for(var i = 0; i < str.length; i++){
    word = str[i].split('');
    word.splice(word.length,0,word[0]);
    word.splice(0,1);
    word = word.join('');
    string += word + 'a' + 'y' + ' ';
  }
  
  //remove last space from string.
  string = string.slice(0,-1);
  return string;
}
pigIt('igloo')
