function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  let lastIndex = str.length - 1;
  for(let i = 0; i < lastIndex / 2; i++){
    if(str[i] !== str[lastIndex - i]){
      return false;
    }
  }
  return true;
}



palindrome("eye");