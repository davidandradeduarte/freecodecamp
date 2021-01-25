function sumAll(arr) {
  let minRange = Math.min(...arr);
  let maxRange = Math.max(...arr);
  let sum = 0;
  for(let i = minRange; i <= maxRange; i++){
    sum += i;
  }

  return sum;
}

console.log(sumAll([4, 1]));