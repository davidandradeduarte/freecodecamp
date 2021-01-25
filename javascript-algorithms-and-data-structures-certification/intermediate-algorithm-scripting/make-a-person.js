var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let temp = firstAndLast.split(' ');

  let firstName = temp[0];
  let lastName = temp[1];

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  this.setFirstName = function(str) {
    firstName = str;
  };
  this.setLastName = function(str) {
    lastName = str;
  };
  this.setFullName = function(str) {
    var t = str.split(' ');
    firstName = t[0];
    lastName = t[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();