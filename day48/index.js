const os = require('os');

console.log("CPU architecture: "+ os.arch());
console.log("Free memory: "+ os.freemem());
console.log("Total memory: "+ os.totalmem());
console.log("Hostname: "+ os.hostname());
console.log("Operating System Name: "+ os.type());
console.log("OS platform: "+ os.platform());
console.log("OS release: "+ os.release());
console.log("Default Directory for temp files: "+ os.tmpdir());