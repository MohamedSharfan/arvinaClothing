const products = [
    {
        title: "ULSAN LEATHER WALLET",
        price: "Rs 2,499.00",
        save: "SAVE RS 500.00",
        thumbnail: "../assest/men/accesseries/(01).jpg",
        collection: "Accessories",
        about: "Compact leather wallet with RFID protection and sleek finish."
    },
    {
        title: "GWANGJU AVIATOR SUNGLASSES",
        price: "Rs 3,299.00",
        save: "SAVE RS 700.00",
        thumbnail: "../assest/men/accesseries/(02).jpg",
        collection: "Sunglasses",
        about: "Stylish aviator sunglasses with UV400 protection and a metal frame."
    },
    {
        title: "DAEJEON SILK TIE",
        price: "Rs 1,999.00",
        save: "SAVE RS 400.00",
        thumbnail: "../assest/men/accesseries/(03).jpg",
        collection: "Formal Wear",
        about: "Luxurious silk tie to complement your formal attire."
    },
    {
        title: "ANDONG LEATHER BELT",
        price: "Rs 2,199.00",
        save: "SAVE RS 550.00",
        thumbnail: "../assest/men/accesseries/(04).jpg",
        collection: "Accessories",
        about: "Durable leather belt with an adjustable buckle for all-day comfort."
    },
    {
        title: "SUNCHEON CANVAS BACKPACK",
        price: "Rs 4,599.00",
        save: "SAVE RS 1,000.00",
        thumbnail: "../assest/men/accesseries/(05).jpg",
        collection: "Travel Gear",
        about: "Multi-compartment canvas backpack ideal for daily and travel use."
    },
    {
        title: "YEOSU WOOL BEANIE",
        price: "Rs 1,299.00",
        save: "SAVE RS 300.00",
        thumbnail: "../assest/men/accesseries/(06).jpg",
        collection: "Winter Essentials",
        about: "Soft wool beanie for cozy warmth in cold weather."
    },
    {
        title: "ICHEON LEATHER BRACELET",
        price: "Rs 999.00",
        save: "SAVE RS 200.00",
        thumbnail: "../assest/men/accesseries/(07).jpg",
        collection: "Accessories",
        about: "Braided leather bracelet with a magnetic clasp — simple and bold."
    },
    {
        title: "CHUNCHEON SPORTS CAP",
        price: "Rs 1,499.00",
        save: "SAVE RS 350.00",
        thumbnail: "../assest/men/accesseries/(08).jpg",
        collection: "Outdoor Wear",
        about: "Adjustable sports cap with moisture-wicking fabric and a snug fit."
    },
    {
        title: "GIMHAE DUFFLE BAG",
        price: "Rs 3,999.00",
        save: "SAVE RS 1,000.00",
        thumbnail: "../assest/men/accesseries/(09).jpg",
        collection: "Travel Gear",
        about: "Spacious duffle bag for weekend getaways and gym sessions."
    },
    {
        title: "GEOJE METAL CUFFLINKS",
        price: "Rs 1,799.00",
        save: "SAVE RS 400.00",
        thumbnail: "../assest/men/accesseries/(10).jpg",
        collection: "Formal Accessories",
        about: "Sleek metal cufflinks that add a refined touch to formal shirts."
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
    const product = products[index];
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = '../product-buy.html';
}
