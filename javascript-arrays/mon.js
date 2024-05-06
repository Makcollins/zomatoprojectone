const veges=['Cabbage','Kale','Sukuma','managu'];
console.log(` original array: ${veges}`);

const select = ()=>{
    let j=veges.splice(1,2,"Pumpkin");
    return j;
}

const sep = () =>{
    let v=veges.slice(0,3,);
    return v;
}
var sp=select();
var sli=sep();
console.log(`splice(): ${sp}`);
console.log(` VEGES AFTER SPLICE: ${veges}`);
console.log(`slice(): ${sli}`);
console.log(` VEGES AFTER SLICE: ${veges}`);

