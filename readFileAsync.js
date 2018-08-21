var fs = require('fs');
console.log("Going to get the file");

var onFileLoad = function (err, file) {
    console.log("Got the file");
};

fs.readFile('readFileSync.js', onFileLoad);
// console.log(file);
console.log("App continues...");