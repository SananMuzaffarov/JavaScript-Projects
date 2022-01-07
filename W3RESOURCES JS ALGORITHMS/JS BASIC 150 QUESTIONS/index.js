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

// QUESTION 7 - Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
for(var year = 2014; year <= 2050; year++){
    var d = new Date(year, 0, 1);
    if( d.getDay() === 0 )
        console.log("1st January is being a Sunday  " + year);
    }

// QUESTION 8 -  Write a JavaScript program where the program takes a random integer between 1 to 10......
const num = Math.ceil(Math.random() * 10);
console.log(num);
 const yourNum = prompt("Enter the Number");
 if (yourNum == num){
   console.log('Matched');
   }
  else{
   console.log('Not matched, the number was '+ yourNum);    
      }

// QUESTION 10 - Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function multiply(){
        var num1 = document.getElementById("firstNum").value;
        var num2 = document.getElementById("secondNum").value;
        console.log(num1 * num2);
}
function divide(){ 
        var num1 = document.getElementById("firstNum").value;
        var num2 = document.getElementById("secondNum").value;
        console.log(num1 / num2);
}

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

// QUESTION 15 - Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function doubleDiff(v){
    if(v <= 13){
        return (13 - v);
    }
    else{
        return (v - 13) * 2;
    }
}
console.log(doubleDiff(22));

// QUESTION 16 - Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
function sumInt(a,b){
    if(a != b){
        return (a + b);
    }
    else{
        return (a + b) * 3;
    }
}
console.log(sumInt(5,6))





// QUESTION 17 - Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 
function diffNum(n){
    if (n <= 19){
      return (19 - n);
    }
    else{
       return (n - 19) * 3;
        }
}
console.log(diffNum(10));

// QUESTION 18 - Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
function findThis(x, y){
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(findThis(50, 50))



// QUESTION 20 - Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 
function find(x,y){
    if((x>0 && y<0) || (x<0 && y>0)){
        return true
    }
    else{
        return false
    }
}
console.log(find(2,2));


 


