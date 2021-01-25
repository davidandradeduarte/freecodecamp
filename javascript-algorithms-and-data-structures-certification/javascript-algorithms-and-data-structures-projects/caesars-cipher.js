function rot13(str) {
  let regex = /[ `´!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let decoded = [];
  for(let i = 0; i < str.length; i++){
    if(regex.test(str[i])){
      decoded.push(str[i]);
    } else {
      var index = alphabet.indexOf(str[i]) - 13;
      let item;
      if(index < 0){
        index = -(index)-1;
        item = [...alphabet].reverse()[index];
      } else {
        item = alphabet[index];
      }
      decoded.push(item);
    }
  }
  return decoded.join('');
}

console.log(rot13("SERR PBQR PNZC"));