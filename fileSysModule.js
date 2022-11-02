const fs = require("fs");
const os = require("os");
fs.writeFileSync("read.txt", "welcome");

fs.appendFileSync("read.txt", " my name is BHarti Sharma");

const buf_data = fs.readFileSync("read.txt");
const original_data = buf_data.toString();
console.log(original_data);

fs.renameSync("read.txt", "readwrite.txt");

console.log(os.hostname());