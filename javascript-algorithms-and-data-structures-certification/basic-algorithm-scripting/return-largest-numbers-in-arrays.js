function largestOfFour(arr) {
  let newArr = [];
  for(let i = 0; i<= arr.length-1; i++){
    let longest = null;
    for(let j = 0; j<= arr[i].length-1; j++){
      let value = arr[i][j];
      if(j == 0){
        longest = value;
      } else {
        longest = value > longest ? value : longest;
      }
    }
    newArr.push(longest);
  }
  return newArr;
}