const os = require("os");

const showUptime = () => {
  setInterval(() => {
    const OSUptime = os.uptime() / 3600;
    const hours = parseInt(OSUptime);
    const minutes = (OSUptime - hours) * 60;
    const seconds = (minutes - parseInt(minutes)) * 60;
    // console.log(
    //   `The System Uptime is ${hours} hours, ${parseInt(
    //     minutes
    //   )} minutes and ${parseInt(seconds)} seconds`
    // );
    console.log(`${hours}:${parseInt(minutes)}:${parseInt(seconds)}`);
  }, 1000);

};

showUptime();
