/* *****NOTES***** */
/*
1. async and await must be used together
    Exceptions: JS Modules & Chrome DevTools Console
2. async/await only affects Promise receiver
3. You can await any function that returns a Promise
4. any function can be converted to async
5. All async functions return a Promise
6. Error handling with try/catch
*/

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Access Granted!');
      reject("Access Denied!");
    }, 1);
  });
}

async function asyncFunc() {
  try {
    const result = await getData();
    console.log(`Succes: ${result}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

asyncFunc();

/* async function start() {
  const data = await fetch(
    "https://api.weather.gov/gridpoints/OKX/35,35/forecast"
  );
  const result = await data.json();
  // console.log(result);
  console.log(result.properties.periods[1].shortForecast);
}

start(); */