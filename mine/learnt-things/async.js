/* function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hakdog");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("☀");
          break;
        case "Cloudy":
          resolve("☁");
          break;
        case "Rainy":
          resolve("🌧");
          break;
        default:
          reject("No Icon Found.");
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success! ${data}`);
}

function onError(error) {
  console.log(`Error:  ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess).catch(onError); */

/* ************ANOTHER ONE************ */

/* function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Access granted!");
    }, 100);
  });
}

function fun2() {
  console.log("function 2");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Na resolve ni sya bai. It means success! wieee hakdog!");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onFail(error) {
  console.log(`Ang error kay: ${error}`);
}

function onFinally() {
    console.log('FINALLY WE\'RE DONE!')
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onFail)
    .finally(onFinally);

console.log('hehe') */