function retirementYear(){

    var age = document.getElementById('age').value;

    var retirementage = document.getElementById('retirementAge').value;

    if(age <=100){

    }
    if(retirementage <=100){

    }

    var retirement = parseFloat(retirementage - age);
    var result = new Date().getFullYear() + retirement;

    document.getElementById("finalScoreText").innerHTML = "You are " + age + " years old";
    document.getElementById("retire").innerHTML = "You want to be " + retirementage + " years old when you retire";
    document.getElementById("result").innerHTML = "In " + result + " you can retire";
}