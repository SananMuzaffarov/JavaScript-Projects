//-----------------------------------------------------------------DOM EVENTS

function ClickMe(){
    document.getElementById("text").style.color = "red";//ONDBLCLICK
};

function Show(){
    document.getElementById("date").innerHTML = new Date();//ONCLICK
};

function upperCase(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();//ONCHANGE
};

function MouseDown(){
    document.getElementById("result").style.color="red";//ONMOUSEDOWN
};

function MouseUp(){
    document.getElementById("result").style.color="green";//ONMOUSEUP
};

function mOver(obj){
    obj.innerHTML = "Thank You" //ONMOUSEOVER
};

function mOut(obj){
    obj.innerHTML = "Mouse Over Me" //ONMOUSEOUT
};

function myFunction(x){
    x.style.background = "yellow"; //ONFOCUS
};



