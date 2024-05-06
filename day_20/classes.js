// Prototypal inheritance
let Friend = {
    have : "Iphone"
}
let Person = {
    owns : "Oneplus"
}

Person._proto_ = Friend;
document.write(Person.have);
console.log(Person.have);

//Date object

//New Date
var d = new Date();
console.log(d);

//New Date(year,month,day,hour,minute, second, minisecond)
var v = new Date(2024,3,11,12,0,0);
console.log(v);

var s = new Date("February, 25, 2025, 11:30:30");
console.log(s)

//MATH OBJECT ///////////////////////////////////////////
var x = 3.1;
console.log("Ceil of "+ x + " is "+ Math.ceil(x));
console.log("Floor of "+x + " is " + Math.floor(x));
console.log("Square root of "+ x + " is "+ Math.sqrt(x));

var radius = 14;
var Area = (Math.PI) * (Math.pow(radius,2));

console.log(Area);

var dt = new Date('2024-02-29');
var tdt = dt.getDate();
console.log(tdt);