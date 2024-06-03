const { readFileSync, writeFileSync } = require("fs");

console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");


writeFileSync(
  "./content/result-file.txt",
  `Here is the result of the writeFilesync\n${first}\nand ${second}`,
  { flag: 'a' }
);

console.log('done with this task here');
console.log('starting the next one');