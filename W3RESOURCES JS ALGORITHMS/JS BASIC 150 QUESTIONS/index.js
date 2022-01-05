// QUESTION 1,3 - Write a JavaScript program to display the current time.
document.write(new Date());
// QUESTION 2 - Write a JavaScript program to print the contents of the current window.
function myFunction(){
    window.print();
};
// QUESTION 4- Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var a = 5;
var b = 6;
var c = 7;
var perimeter = (a + b + c)/2;
var area = Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
console.log(area);
 


