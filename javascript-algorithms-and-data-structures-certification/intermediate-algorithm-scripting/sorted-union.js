function uniteUnique(...arr) {
  let concatArr = [].concat(...arr); 
  return concatArr.filter((item, pos) => {
    return concatArr.indexOf(item) == pos;
  });
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));