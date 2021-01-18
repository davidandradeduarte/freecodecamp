function confirmEnding(str, target) {
  let endsWith = true;
  let j = 0;
  for(let i = str.length-target.length; i <= str.length-1; i++){
    if(str[i] != target[j]){
      return false;
    }
    j++;
  }
  return endsWith;
}