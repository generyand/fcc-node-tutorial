/* const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Access granted!");
  }, 1000);
}); */

/* **********SAME LANG NI SA FIRST ONE********** */
const funcPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Access granted!");
    }, 1000);
  });
};
const newPromise = funcPromise();

const successMessage = (data) => {
  console.log(`Success: ${data}`);
};

const errorMessage = (error) => {
  console.log(`Failed: ${error}`);
};

const clearConsole = () => {
  setTimeout(() => {
    console.clear();
  }, 2000);
};

newPromise.then(successMessage).then(clearConsole).catch(errorMessage);

console.log("Accessing...");
