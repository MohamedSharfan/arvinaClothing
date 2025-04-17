
const products = [
    {
        title: "MENS SHIRTS",
        thumbnail: "../assest/women/category/dress5.webp",
        link:"./shirts.html",
    },
    {
        title: "MENS SUITS",
        thumbnail: "../assest/women/category/bottom.jpg",
        link:"./suits.html",
    },
    {
        title: "MENS PANTS",
        thumbnail: "../assest/women/category/(9).jpg",
        link:"./pants.html",
    },
    {
        title: "MENS JACKETS",
        thumbnail: "../assest/women/category/(8).jpg",
        link:"./jackets.html",
    },
    {
        title: "MEN ACCESSORIES",
        thumbnail: "../assest/women/category/accessories7.jpg",
        link:"./accessories.html",
    },
    
];



function createProductCard(product, index) {
    const card = document.createElement('div');
    card.classList.add('category');


    card.innerHTML = `
       <div class="category-thambnail" onclick="window.location.href ='${product.link}';" >
            <img class="category-thambnail-image" src="${product.thumbnail}">
            <div class="category-title">
                <p>${product.title}</p>
            </div>
        </div>
        
    `;

    return card;
}

function renderProducts() {
    const productList = document.querySelector('.product-category');

    products.forEach((product, index) => {
        const card = createProductCard(product, index);
        productList.appendChild(card);
    });
    
}


