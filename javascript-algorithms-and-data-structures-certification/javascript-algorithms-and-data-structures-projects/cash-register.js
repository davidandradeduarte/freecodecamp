function checkCashRegister(price, cash, cid) {

  var units = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };

  var due = cash - price;
  let cidTotal = getCashRegister(cid);

  if(due > cidTotal){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if(due == cidTotal){
    return {status: "CLOSED", change: cid};
  }

  var change = [];
  for(let i = cid.length -1; i >= 0; i--){
    if(due === 0){
      break;
    }

    if(units[cid[i][0]] > due){
      continue;
    }
    var numberOfUnits = cid[i][1]/units[cid[i][0]];

    // for each unit in cid
    for(let x = 0; x < numberOfUnits; x++){

      if(due == 0){
        break;
      }

      if(due - units[cid[i][0]] >= 0){
        due -= units[cid[i][0]];
        due = due.toFixed(2);

        // check if unit is already present on change
        var existed = false;
        for(let k = 0; k < change.length; k++){
          if(change[k][0] === cid[i][0]){
            existed = true;
            change[k][1] += units[cid[i][0]];
          }
        }

        if(!existed){
          change.push([cid[i][0], units[cid[i][0]]]);
        }
      }
    }
  }

  if(change.length === 0 || due > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    return {status: "OPEN", change: change};
  }
}

function getCashRegister(cid){
  var total = 0;
  for(let i = 0; i < cid.length; i++){
    total += cid[i][1];
  }

  return total;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));