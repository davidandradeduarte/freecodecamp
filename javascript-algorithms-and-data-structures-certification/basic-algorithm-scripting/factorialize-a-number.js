function factorialize(num) {
  let fatorial = 1;
  for(let i = 1; i <= num; i++){
    fatorial *= i;
  }
  return fatorial;
}

factorialize(5);