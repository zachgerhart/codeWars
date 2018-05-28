/// return an array of unique values from the two arrays below
const arr1 = [1, 2, 3, 4, 5, 6, 9];
const arr2 = [3, 6, 4, 2, 8];

// [1, 5, 9, 8]

function unique (arr1, arr2){
  let newArr = []
  let combined = arr1.concat(arr2)
  console.log(combined);
  for(var i = 0; i < combined.length; i++){
     let target = combined.indexOf(combined[i])
     //console.log(array)
     let lastTarget= combined.lastIndexOf(combined[i])
     //console.log(newArray);
     if(target === lastTarget){
      newArr.push(combined[i])
      console.log(newArr);
     }
  }
  return newArr;
  
  }
unique(arr1,arr2);
