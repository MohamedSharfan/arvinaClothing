const products = [
    {
        title: "ULSAN BOMBER JACKET",
        price: "Rs 7,499.00",
        save: "SAVE RS 1,500.00",
        thumbnail: "../assest/men/jackets/(01).jpg",
        collection: "Winter Wear",
        about: "Classic bomber jacket with ribbed cuffs and zip closure — stylish and warm."
    },
    {
        title: "GWANGJU PUFFER JACKET",
        price: "Rs 8,999.00",
        save: "SAVE RS 2,000.00",
        thumbnail: "../assest/men/jackets/(02).jpg",
        collection: "Winter Wear",
        about: "Insulated puffer jacket with a water-resistant outer shell, built for cold climates."
    },
    {
        title: "DAEJEON DENIM JACKET",
        price: "Rs 6,799.00",
        save: "SAVE RS 1,200.00",
        thumbnail: "../assest/men/jackets/(03).jpg",
        collection: "Casual Wear",
        about: "Rugged denim jacket with faded wash and durable metal buttons."
    },
    {
        title: "ANDONG HOODED WINDBREAKER",
        price: "Rs 5,499.00",
        save: "SAVE RS 999.00",
        thumbnail: "../assest/men/jackets/(04).jpg",
        collection: "Outdoor Wear",
        about: "Lightweight windbreaker with a hood — perfect for unpredictable weather."
    },
    {
        title: "SUNCHEON PARKA JACKET",
        price: "Rs 9,499.00",
        save: "SAVE RS 2,000.00",
        thumbnail: "../assest/men/jackets/(05).jpg",
        collection: "Winter Wear",
        about: "Heavy-duty parka with fur-lined hood and deep pockets for extreme cold."
    },
    {
        title: "YEOSU SUEDE JACKET",
        price: "Rs 7,999.00",
        save: "SAVE RS 1,499.00",
        thumbnail: "../assest/men/jackets/(06).jpg",
        collection: "Premium Wear",
        about: "Smooth suede jacket with inner fleece lining for luxe comfort."
    },
    {
        title: "ICHEON TRACK JACKET",
        price: "Rs 4,299.00",
        save: "SAVE RS 800.00",
        thumbnail: "../assest/men/jackets/(07).jpg",
        collection: "Sportswear",
        about: "Zip-up track jacket with contrast stripes — sporty and breathable."
    },
    {
        title: "CHUNCHEON MOTORCYCLE JACKET",
        price: "Rs 10,999.00",
        save: "SAVE RS 2,500.00",
        thumbnail: "../assest/men/jackets/(08).jpg",
        collection: "Rider Series",
        about: "Edgy faux leather biker jacket with reinforced panels and a bold look."
    },
    {
        title: "GIMHAE PADDED VEST JACKET",
        price: "Rs 5,799.00",
        save: "SAVE RS 1,200.00",
        thumbnail: "../assest/men/jackets/(09).jpg",
        collection: "Layered Essentials",
        about: "Padded vest for layering, with snap buttons and zipper — lightweight and versatile."
    },
    {
        title: "GEOJE TRENCH COAT",
        price: "Rs 11,250.00",
        save: "SAVE RS 2,750.00",
        thumbnail: "../assest/men/jackets/(10).jpg",
        collection: "Classic Wear",
        about: "Elegant trench coat with belt closure, perfect for a refined outerwear look."
    }
];



function createProductCard(product, index) {
    const card = document.createElement('div');
    card.classList.add('product-card');


    card.innerHTML = `
            <div class="thambnail" onclick="buyProduct(${index})">
                <img class="thambnail-image" src="${product.thumbnail}">
            </div>
            <div class="save">
                <p>${product.save}</p>
            </div>
            <div class="product-details">
                <div class="title">
                   <p>${product.title}</p>
                </div>
                <div class="price">
                    <p>${product.price}</p>
                </div>
                <div class="button-section">
                    <div class="thambnail-switch">
                        <div class="thambnail-switch-1">
                            <img class="thambnail-switch-image" src="${product.thumbnail}">
                        </div>
                        <div class="thambnail-switch-1">
                            <img class="thambnail-switch-image" src="${product.thumbnail}">
                        </div>
                    </div>
                    <div class="buy-btn">
                        <button onclick="buyProduct(${index})">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
    
        
    `;

    return card;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function renderProducts() {
    const productList = document.querySelector('.product-list');

    shuffleArray(products);

    products.forEach((product, index) => {
        const card = createProductCard(product, index);
        productList.appendChild(card);
    });
    
}


function buyProduct(index) {
    localStorage.removeItem('selectedProduct');
    const product = products[index];
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = '../product-buy.html';
}
