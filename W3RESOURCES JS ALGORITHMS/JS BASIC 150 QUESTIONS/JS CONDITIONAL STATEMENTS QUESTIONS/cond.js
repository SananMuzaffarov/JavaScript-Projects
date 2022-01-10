// QUESTION 1 - Write a JavaScript program that accept two integers and display the larger.
var num1, num2;
num1 = prompt("Enter the First Number:");
num2 = prompt("Enter the Second Number:");                                         
if(num1 > num2){
    alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}
else if(num1 == num2){
    alert("The values "+ num1+ " and "+num2+ " are equal.")
}
else{
    alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}

// QUESTION 2 - Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
var x = 1;
var y = -1;
var z = 2;
if(x>0 && y>0 && z>0){
    alert("The sign of product is +");
}
else if(x<0 && y<0 && z<0){
    console.log("The sign of product is -");
}
else if(x>0 && y<0 && z<0){
    console.log("The sign of product is +");
}
else if(x<0 && y>0 && z<0){
    console.log("The sign of product is +");
}
else{
    console.log("The sign of product is -");
}

// QUESTION 3 - Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
var x = 3;
var y = -2;
var z = 5;
if (x>y && x>z){
    if (y>z){
        console.log(x + ", " + y + ", " +z);
    }
    else{
        console.log(x + ", " + z + ", " +y);
        }
}
else if(y>x && y>z){
    if(x>z){
        console.log(y + ", " + x + ", " +z);
    }
    else{
        console.log(y + ", " + z + ", " +x);
    }
}
else if(z>x && z>y){
    if (x>y){
        console.log(z + ", " + x + ", " +y);
    }
    else{
        console.log(z + ", " + y + ", " +x);
    }
}   

// QUESTION 4 - Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
a = 1;
b = 2;
c = 3;
d = 5;
f = -6;
if(a>b && a>c && a>d && a>f){
    console.log(a);
}
else if(b>a && b>c && b>d && b>f){
    console.log(b);
}
else if(c>a && c>b && c>d && c>f){
    console.log(c);
}
else if(d>a && d>c && d>b && d>f){
    console.log(d);
}
else{
    console.log(f);
}
