let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=^[^0-9]+\d*\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);