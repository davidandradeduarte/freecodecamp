function addTogether(x, y = null) { 
  if(typeof x !== 'number'){
    return undefined;
  }

  if(y == null){
    return function (a) {
      if(typeof a !== 'number'){
        return undefined;
      }
      return x + a;
    };
  } else {
    if(typeof y !== 'number'){
      return undefined;
    }
  }

  return x + y;
}

// addTogether(2,3);
console.log(addTogether(2)([3]));