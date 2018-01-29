// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.

// For example:
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

//Note: The function should accept an integer and return an integer
function squareEveryNum(nums) {
var numArray = nums.toString().split("")
for(var i = 0; i < numArray.length; i++){
    numArray[i] = Math.pow(numArray[i], 2)

    }
  return Number(numArray.join(""))

}
squareEveryNum(9119);
