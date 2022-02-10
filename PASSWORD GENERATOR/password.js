const empty = "";
const number = "1234567890";
const uCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lCase = "qwertyuiopasdfghjklzxcvbnm";
const symbol = "!@#$%^&*=-_"

const pLength = document.getElementById("passwordLength");
const pUpper = document.getElementById("passwordUppercase");
const pLower = document.getElementById("passwordLowercase");
const pNumber = document.getElementById("passwordNumber");
const pSymbol = document.getElementById("passwordSymbol");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener('click',function(){
    let initialPassword = empty;
    (pUpper.checked) ? initialPassword += uCase : "";
    (pLower.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";
});

const copy = document.getElementById("copy");
copy.addEventListener("click",function(){
    if(password.value == ""){
        alert("Please write password, then try to copy to clipboard!");
    }
    else{
        password.select();
        document.execCommand("copy");
        alert("Your password is in clipboard right now!");
    }
})