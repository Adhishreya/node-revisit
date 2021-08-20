const os = require('os');
const path=require('path');
//bulit in modules

// console.log(os);

//info about current user
const user = os.userInfo();
console.log(user);

//creturns system uptime in seconds
console.log(os.uptime());

const osStats=
{
    name: os.type(),
    freeMemory:os.freemem(),
    release : os.release(),
    totalMemory : os.totalmem()
}

console.log(osStats);

console.log(path.sep);

const fullPath = path.join('/node_revisit','/node_basics','app.js') ;
console.log(fullPath);

//to get the basepath
console.log(path.basename(fullPath))