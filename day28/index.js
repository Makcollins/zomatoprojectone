// async function foo() { return 'Hello'; } 
//     foo().then(console.log);

// async function sum(a, b) { return a + b; } sum(2, 3).then(console.log);
async function double(value) { return value * 2; } double(4).then(console.log);
async function getStatus() { return 'OK'; }
console.log(getStatus());