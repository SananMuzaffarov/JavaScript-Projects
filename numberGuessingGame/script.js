let enterButton = document.getElementById('enter');
let againButton = document.getElementById('again');
let outputText = document.getElementById('output');

let randomNum = Math.ceil(Math.random() * 100);

const result = () => {

    let inputNum = document.getElementById('inputNumber').value;

    if(inputNum == randomNum){
        outputText.innerHTML = "It is True!" + "The Number is" + randomNum;
    }
    else if(inputNum > randomNum && inputNum < 100){
        outputText.innerHTML = "Your Guess is High";
    }
    else if(inputNum < randomNum && inputNum > 1){
        outputText.innerHTML = "Your Guess is Low";
    }
    else if(inputNum < 1){
        outputText.innerHTML = "Higher, It has to be between 1 and 100!";
    }
    else if(isNaN(inputNum)){
        outputText.innerHTML = "It is not a Number!";
    }
    else{
        outputText.innerHTML = "Lower, It has to be between 1 and 100!";
    }
}

enterButton.addEventListener('click', result);
againButton.addEventListener('click', function(){
    location.reload();
});

