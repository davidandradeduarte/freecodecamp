// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

    var found = false;
    
    for(var i = 0; i <= contacts.length - 1; i++){
        if(contacts[i].firstName == name) {
            found = true;
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }            
        }
    }

    if(!found){
        return "No such contact";
    } else {
        return "No such property";
    }
// Only change code above this line
}

lookUpProfile("Akira", "address")