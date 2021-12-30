var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function pressHere(){
    modal.style.display = "block";
}
function clickHere(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal) {
      modal.style.display = "none";
    }
}