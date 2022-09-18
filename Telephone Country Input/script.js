function typeCode(){
    let val = document.getElementById('telephone').value;

    if(val === "select type"){
        document.getElementById('output').value = "";
    }
    else if(val === "050"){
        document.getElementById('output').value = "050";
    }
    else if(val === "055"){
        document.getElementById('output').value = "055";
    }
    else if(val === "070"){
        document.getElementById('output').value = "070";
    }
}