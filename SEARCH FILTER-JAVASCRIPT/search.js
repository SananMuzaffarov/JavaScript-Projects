// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
search.addEventListener("keyup", filterProducts);

function filterProducts(e){
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product){
        const item = product.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            product.parentElement.parentElement.style.display = "block"
        } 
        else{
            product.parentElement.parentElement.style.display = "none"
        }
    })
}