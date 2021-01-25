function sumPrimes(num) {

  let arr = [];

  for(let i = 2; i <= num; i++){
    arr.push(i);
  }

  return arr.filter(x => {

    for(let i = 2; i < x; i++){
    if(x % i == 0){
      return false;
    }
  }

  return true;
  }).reduce((a, b) => a + b, 0);
}

console.log(sumPrimes(10));
