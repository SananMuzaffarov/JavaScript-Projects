function checkPalin(){  
    // sozun uzunlugunu qeyd edek.  
    const len = string.length;  
    // sozu 2 yere ayiririq.  
    for(let i = 0; i < len / 2; i++){  
    // daxil etdiyimiz ilk ve son seylerinin eyni olmasini yoxlayiriq.
        if (string[i] !== string[len - 1 - i]){  
            alert( 'It is not a palindrome');  
        }  
    } 
    alert( 'It is a palindrome');  
}
// Her hansisa bir qiymet ve ya ifade daxil edek ve cavabi alaq.
const string = prompt('Enter a string or number: ');  
const value = checkPalin(string);  
console.log(value);  