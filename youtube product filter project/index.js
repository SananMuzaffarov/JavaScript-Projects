const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-products');
for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click', (e)=>{
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        storeProducts.forEach((product)=>{
            if(filter === 'all'){
                product.style.display = "block";
            }
            else{
                if(product.classList.contains(filter)){
                    product.style.display = "block";
                }
                else{
                    product.style.display = "none";
                }
            }
        });
    });
}
// Search Filter
const search = document.getElementById('search');
const productName = document.querySelectorAll('.store-product-detail h2');
search.addEventListener('keyup', filterproduct);

function filterproduct(e){
    const text = e.target.value.toLowerCase();
    productName.forEach((product)=>{
        const item = product.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            product.parentElement.parentElement.style.display = "block";
        }
        else{
            product.parentElement.parentElement.style.display = "none";
        }
    });
}