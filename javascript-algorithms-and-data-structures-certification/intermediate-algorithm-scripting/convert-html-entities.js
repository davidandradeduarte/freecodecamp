function convertHTML(str) {

  let chars = str.split('');
  let value = "";
  chars.forEach(x => {
    switch(x){
      case "<":
        value += "&lt;";
        break;
      case "&":
        value += "&amp;";
        break;
      case ">":
        value += "&gt;";
        break;
      case '"':
        value += "&quot;";
        break;
      case "'":
        value += "&apos;";
        break;
      default:
        value += x;
    }
  });
  return value;
}

console.log(convertHTML("Dolce & Gabbana"));