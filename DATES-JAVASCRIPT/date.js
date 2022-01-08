// EXAMPLE 1
const x = new Date(); // It will show us the current date.With year month day hours minutes seconds..
document.write(x);

// EXAMPLE 2
const y = new Date("01/09/2022"); // ISO Dates' example
console.log(y);

// EXAMPLE 3
const z = new Date("09 January 2022"); // Long Dates' example
console.log(z);

// EXAMPLE 4 
const a = new Date("2022-01-10"); // Short Dates' example
console.log(a);

// EXAMPLE 5 - getMonth,getDate,getFullYear,getSeconds,getMinutes,getDay and etc.
const b = new Date();
console.log(b.getDate());
console.log(b.getDay());
console.log(b.getHours());
console.log(b.getMilliseconds());
console.log(b.getMinutes());

// EXAMPLE 6 - setMonth,setDate,setFullYear,setSeconds,setMinutes,setDay and etc.
const c = new Date();
c.setMonth(10); // same day as today but in different month.
console.log(c);