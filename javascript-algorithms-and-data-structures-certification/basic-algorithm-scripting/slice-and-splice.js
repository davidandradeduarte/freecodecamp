function frankenSplice(arr1, arr2, n) {
  var spliced = [...arr2];
  spliced.splice(n, 0, ...arr1);
  return spliced;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));