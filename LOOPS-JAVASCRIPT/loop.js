// EXAMPLE 1
for(var i=0; i<10; i++){
    console.log(i);
};
// EXAMPLE 2
var arr = [1, 2];
    for (var x = 0; x <= arr.length; x++){
       console.log(arr[x]);
}
// EXAMPLE 3 => "For of rule"
let arr1 =  ["Sanan", "Kanan"];
    for (let y of arr1){
        console.log(y);
}
// EXAMPLE 4 => WHILE LOOP
let z = 1;
while (z < 5) {
  console.log(z);
  z++;
}
// EXAMPLE 5 => DO WHILE LOOP
var a = 0;
do {
  a++;
  console.log(a);
} 
while (a < 4);
// Find sum of the numbers from zero to B.
function findSum(b){
    let sum = 0;
    for(var i = 1; i<=b; i++){
        sum = sum + i;
    }
    return sum;
};
let b = 15;
document.write(findSum(b));