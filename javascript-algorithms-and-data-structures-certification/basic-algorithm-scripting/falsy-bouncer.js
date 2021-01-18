function bouncer(arr) {
  let cleanArray = [];
  for(let i=0; i<arr.length; i++){
    if(!!arr[i]){
      cleanArray.push(arr[i]);
    }
  }
  return cleanArray;
}

console.log(bouncer([7, "ate", "", false, 9]));