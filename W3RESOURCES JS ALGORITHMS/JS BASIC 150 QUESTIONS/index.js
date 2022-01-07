// QUESTION 1,3 - Write a JavaScript program to display the current time.
document.write(new Date());

// QUESTION 2 - Write a JavaScript program to print the contents of the current window.
function myFunction(){
    window.print();
};

// QUESTION 4 - Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var a = 5;
var b = 6;
var c = 7;
var perimeter = (a + b + c)/2;
var area = Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
console.log(area);

// QUESTION 6 - Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function findLeapYear(year){
    if(year % 4 === 0 && year % 100=== 0 && year % 400=== 0){
        console.log("This is Leap Year!");
    }
    else{
        console.log("This is not Leap Year!");
    }
}
console.log(findLeapYear(2000));

// QUESTION 11 - Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function toCelsius(f){
    return (5/9) * (f-32);
}
console.log(toCelsius(77));

// QUESTION 12 - Write a JavaScript program to get the website URL (loading page).
console.log(document.URL);

// QUESTION 13 - Write a JavaScript exercise to create a variable using a user-defined name.
var yourName = "Sanan";
var hisName = "Amal";
this[yourName] = hisName;
console.log(this[yourName]);

// QUESTION 14 - Write a JavaScript exercise to get the extension of a filename. 
var fileName = "Ders.pdf";
console.log(fileName.split('.').pop());

 


