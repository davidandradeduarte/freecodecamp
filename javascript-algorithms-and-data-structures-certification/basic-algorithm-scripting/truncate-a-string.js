function truncateString(str, num) {
  let newString = str;
  if(str.length > num){
    newString = "";
    for(let i=0; i <= num-1; i++){
      newString += str[i];
    }
    newString += "...";
  }
  return newString;
}

let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(result);
