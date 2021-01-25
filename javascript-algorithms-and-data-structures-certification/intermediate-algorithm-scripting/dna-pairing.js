function pairElement(str) {
  return str.split('').map(x => {
    switch(x){
      case 'A':
        return ['A','T'];
      case 'T':
        return ['T','A'];
      case 'C':
        return ['C','G'];
      case 'G':
        return ['G','C'];
    }
  });
}

console.log(pairElement("GCG"));