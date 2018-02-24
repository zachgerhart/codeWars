// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

function encode(str,  n)
{
  let mystring = str.split('');
  for(let i = 0; i< mystring.length; i++)
  {
    let temp = mystring[i].charCodeAt(0) - 96;
    console.log(temp);
  }


  return str;
}

encode("scout");
