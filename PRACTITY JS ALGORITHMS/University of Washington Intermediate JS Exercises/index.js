// Exercise 1 - Now you'll write a bit of JavaScript testing code that pops up an alert box. This is just a test to make sure that your browser is running your JavaScript file, before we move on to tougher exercises.
function clickMe(){
    window.alert("Hello, World!");
}
// Exercise 2
function mouseOver(){
    document.getElementById("text").style.color = "red";
}
function mouseDown(){
    document.getElementById("text").style.color = "blue";
}
// Exercise 3 - Add a new button to the HTML with the text "Snoopify" that, when clicked, uppercases the text in the text area.(Snoopify)
function touchMe(){
    document.getElementById("demo").style.textTransform = "uppercase"; 
}
// Exercise 4 - Timer
window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var sButton = document.getElementById('startButton');
    var stButton = document.getElementById('stopButton');
    var Interval;

    sButton.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    stButton.onclick = function(){
        clearInterval(Interval);
    }

    function startTimer(){
        tens++;
        if(tens<=9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML = tens;
        }
        if(tens>99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds>9){
            appendSeconds.innerHTML = seconds;
        }
    }
}
// Exercise 5 - When "Bling" is checked, also set the page to have a background image.
function setImage(){
    document.body.style.backgroundImage = "url(r5CAq.jpg)";
}