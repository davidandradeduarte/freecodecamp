function chunkArrayInGroups(arr, size) {
  let chunks = arr.length / size;

  let chunkedArr = [];
  for(let i=0; i<chunks; i++){
    let chunk = [];
    for(let x=i*size; x<i*size+size && x < arr.length; x++){
      chunk.push(arr[x]);
    }
    chunkedArr.push(chunk);
  }

  return chunkedArr;
}

console.log('result', chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));