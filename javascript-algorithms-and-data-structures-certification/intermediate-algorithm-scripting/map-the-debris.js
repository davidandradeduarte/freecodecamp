function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var orbitalPeriods = [];

  arr.forEach(obj => {
    orbitalPeriods.push({
      name: obj.name,
      orbitalPeriod: (function() {
        return Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + obj.avgAlt, 3)) / GM));
      })()
    });
  });

  return orbitalPeriods;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));