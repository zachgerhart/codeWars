// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

function Fizzbuzz (n) {
    arr = []
  for (var i = 1; i <= n; i++){
    if( i % 5 === 0 && i % 3 === 0){
      arr.push("FizzBuzz")
    } else if(i % 3 === 0){
      arr.push("Fizz")
    } else if (arr[i] % 5 === 0){
      arr.push("Buzz");
    }
  }
    return arr;

}
Fizzbuzz([9]);
