function getBuyProduct() {
    
    const productData = localStorage.getItem('selectedProduct');

    if (productData) {
        const product = JSON.parse(productData);
        console.log(product.title);
        let thumbnail = product.thumbnail;

        document.getElementById("product").src = thumbnail.substring(1);
        
        
        document.getElementById("title").textContent = product.title;
        document.getElementById("collection").textContent = product.collection; 
        document.getElementById("price").textContent = product.price;
        document.getElementById("about").textContent = product.about;


    } else {
        console.warn("No product data found in localStorage.");
    }
}





