function findLongestWordLength(str) {
  let longest = 0;
  let words = str.split(" ");
  for(let i=0; i<= words.length-1;i++){
    var wlength = words[i].length;
    longest = wlength > longest ? wlength : longest;
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));