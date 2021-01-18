function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  let exists = false;
  for(let i=0; i<word2.length; i++){
    exists = false;
    for(let j=0; j<word1.length; j++){
      if(word2[i] == word1[j]){
        exists = true;
        break;
      }
    }

    if(exists == false){
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));