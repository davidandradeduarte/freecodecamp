function whatIsInAName(collection, source) {

  var keys = Object.keys(source);

  return collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));