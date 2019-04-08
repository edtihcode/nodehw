const fs = require("fs");

let fileName = "iso_8859-1.txt";
let data = fs.readFileSync("iso_8859-1.txt","utf8");

let exploded = data.split("\n");

console.log("The file "+fileName+ " has a total of " +exploded.length+ " lines.");
