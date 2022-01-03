// EXAMPLE FOR "SWITCH CASE".
let a = 2;
switch(a){
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);

//Lets make basic calculator with the help of the switch case
var result;
const operator = prompt("Select one operator:+-*/");
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator){
    case '+':
        result = number1 + number2;
        document.write(result);
        break;
    case '-':
        result = number1 - number2;
        document.write(result);        
        break;
    case '*':
        result = number1 * number2;
        document.write(result);
        break;
    case '/':
        result = number1 / number2;
        document.write(result);
        break;
    default:
        document.write('Invalid operator');
}