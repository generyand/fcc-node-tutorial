const { readFile, writeFile } = require("fs");
console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result of the writeFilesync\n${first}\nand ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log('done here');
      }
    );
  });
});

console.log('starting next nasad');