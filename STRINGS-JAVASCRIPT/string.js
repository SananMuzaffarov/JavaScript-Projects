// EXAMPLE 1
const text = "Sanan"; //double quote string
console.log(text);

// EXAMPLE 2
const txt = "Alhamdulillah";
console.log(txt.length); //We can find the text's length

// EXAMPLE 3
let viki = "We are from \"Azerbaijan\"."; // We create double quotes.
console.log(viki);

// EXAMPLE 4 => String Methods
const countries = "Azerbaijan, Turkey, USA";
document.write(countries.slice(11,18)); //cut from 11 to 18.Then give us the rest part.Its output will be TURKEY.

const animals = "Lion, Eagle, Whale";
document.write(animals.substring(5,11)); // it's same as a slice method.This one's output will be EAGLE.

function upperCase(){
    var x = "sanan"; // In here as you can see our string is in lowercase, but we create a button with onclick event, with the help of this we uppercase the our string.
    document.getElementById("demo").innerHTML = x.toUpperCase(); //do same thing if you want to make your string to lowerCase.
}

function replaceMe(){
    var x = "Good Bye";
    document.getElementById("beta").innerHTML = x.replace(); // With the help of this method, we can easily change(replace) the strings each other.
}
