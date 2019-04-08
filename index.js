const _ = require("lodash");
const fs = require("fs");

//fs.readFile();
//fs.readFileSync();

//fs.writeFile();
//fs.writeFIleSync();

let contents =  fs.readFileSync('sample.txt','utf8');
let dataToWrite = contents + "\nI was added to the previous text";
fs.writeFileSync("sample.txt", dataToWrite, "utf8");
//fs.writeFileSync("sample.txt",contents+"\nHi there I was written by JavaScript","utf8");

fs.writeFileSync("../outside.txt", "Hello World", "utf8");
console.log(contents);
console.log(_.random(1,10));
