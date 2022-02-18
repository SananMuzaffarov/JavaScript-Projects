function checkFormData(){
    var message = "";

    // We access the texts
    let yourName = document.getElementById("name").value;
    let yourEmail = document.getElementById("mail").value;
    let yourAge = document.getElementById("age").value;
    
    // We access the radios
    let maleGender = document.getElementById("gender1").checked;
    let femaleGender = document.getElementById("gender2").checked;

    // We access the checkbox
    let ourCheckBox = document.getElementById("checkBox").checked;

    message += "Name : " + yourName + "<br>";
    message += "Email : " + yourEmail + "<br>";
    message += "Age : " + yourAge + "<br>";
    message += "Male : " + maleGender + "<br>";
    message += "Female : " + femaleGender + "<br>";
    message += "Agreed : " + ourCheckBox + "<br>";

    document.getElementById("demo").innerHTML = message;
}