function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;
  for(let user in usersObj){
    if(usersObj[user].online === true){
      onlineUsers++;
    }
  }
  return onlineUsers;
  // Only change code above this line
}