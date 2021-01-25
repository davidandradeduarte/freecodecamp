function diffArray(arr1, arr2) {
  var newArr = [];
  
  arr1.forEach(x => !arr2.includes(x) && newArr.push(x));
  arr2.forEach(x => !arr1.includes(x) && newArr.push(x));
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);