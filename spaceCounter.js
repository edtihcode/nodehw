const fs = require("fs");

let fileName = "iso_8859-1.txt";
let data = fs.readFileSync("iso_8859-1.txt","utf8");

let exploded = data.split(" ");

console.log("The file "+fileName+ " has a total of " +exploded.length+ " spaces/words.");

// var count = ;
var found = data.match(/1||2/gi);
console.log(found);
