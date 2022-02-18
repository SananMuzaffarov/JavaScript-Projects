let message = "";
let answer = 5;
let flag = false;

do{
    let input1 = prompt("Guess the Number from 1 to 10 : ");

    input1 = parseInt(input1);

    if(input1 != answer){
        alert("Wrong Answer!");
    }
    else{
        flag = true;
        break;
    }
}
while(answer != input1);

if(flag){
    message += "You guess the right " + answer + " is the right"; 
}
else{
    message += "Sorry.. Try again!";
}

document.write(message);