// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals (word) {
	let newArr = [];
	let letters = word.split("")
	for(let i = 0; i < letters.length; i++){
	  if(letters[i].toLowerCase() !== letters[i]){
	    newArr.push(i);
	  }
	}
	return newArr;
}
capitals('ZAcHarY');
