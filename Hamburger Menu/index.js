function myFunction(){
    var links = document.getElementById('nav-links');
    if(links.style.display === 'block'){
        links.style.display = 'none';
    }
    else{
        links.style.display = 'block';
    }
}