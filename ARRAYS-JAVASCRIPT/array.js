const arr = ["Mike", "Kane", "Phil"];
document.getElementById("demo").innerHTML = arr; //Calling Normal array.

const arr1 = ["Mike", "Kane", "Phil"];
document.getElementById("beta").innerHTML = typeof(arr1); //We can find array's type in this way.

const arr2 = ["Mike", "Kane", "Phil"];
document.getElementById("check").innerHTML = arr2.length; //We can find array's length in this way.

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("car").innerHTML = cars[0]; // Its output will be the car array's first element("Saab");.

const fruits = ["Kiwi", "Banana", "Orange"]; //If we find this line's output, it will be => "Kiwi", "Banana", "Orange".
fruits.push("Lemon"); // PUSH appends a new element to an array.
console.log(fruits);

const person = ["Sanan", "Kanan", "Amal"]; //If we find this line's output, it will be => "Sanan", "Kanan", "Amal".
person.pop(); // POP removes the last element from an array.
console.log(person);

//SHIFT() METHOD => Removes the first element from an array.
//UNSHIFT() METHOD => adds new elements to the beginning of an array.

const meyveler = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = meyveler;
meyveler.sort(); // it sorts Alphabetically array.
document.getElementById("demo2").innerHTML = meyveler;

// RESERVE() => it reserves all the elements in array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction); // numbers2 connect to the numbers1 with the function.
document.getElementById("demo3").innerHTML = numbers2;
function myFunction(value){
  return value * 2;
}