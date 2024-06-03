const os = require('os');

// info about current user
const user = os.userInfo();

console.log(`The System Uptime is ${os.uptime() / 3600} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.table(currentOS);