function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  }

  let repeated = str;
  for(let i=2; i<= num; i++){
    repeated += str;
  }

  return repeated;
}

var result = repeatStringNumTimes("*", 3);
console.log(result);