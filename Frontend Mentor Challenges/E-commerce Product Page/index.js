function changePhoto(){
    if(document.getElementById("cart1").src == "images/image-product-1.jpg"){
        document.getElementById("cart").src == "images/image-product-1.jpg";
    }
    else if(document.getElementById("cart2").src == "images/image-product-2.jpg"){
        document.getElementById("cart").src == "images/image-product-2.jpg";
    }
    else if(document.getElementById("cart3").src == "images/image-product-3.jpg"){
        document.getElementById("cart").src == "images/image-product-3.jpg";
    }
    else if(document.getElementById("cart4").src == "images/image-product-4.jpg"){
        document.getElementById("cart").src == "images/image-product-4.jpg";
    }
}


// set inital value to zero
let count = 0;
qiymet = 125;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const price = document.querySelector("#p");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      qiymet *= count;
    } 
    else if (styles.contains("increase")) {
      count++;
      qiymet *= count;
    } 
    else {
      count = 0;
    }
    value.textContent = count;
    price.textContent = qiymet;
  });
});

