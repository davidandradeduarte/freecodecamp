function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));