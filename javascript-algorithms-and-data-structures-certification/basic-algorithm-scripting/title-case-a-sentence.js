function titleCase(str) {
  let words = str.split(" ");
  for(let i=0; i<= words.length-1; i++){
    const first = words[i][0];
    words[i] = first.toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join(" ");
}

titleCase("I'm a little tea pot");