const products = [
    {
        title: "ULSAN SLIM-FIT JEANS",
        price: "Rs 3,999.00",
        save: "SAVE RS 800.00",
        thumbnail: "../assest/men/jeans/(01).jpg",
        collection: "Denim Wear",
        about: "Slim-fit denim with slight stretch for all-day comfort and modern style."
    },
    {
        title: "GWANGJU STRAIGHT LEG JEANS",
        price: "Rs 4,299.00",
        save: "SAVE RS 950.00",
        thumbnail: "../assest/men/jeans/(02).jpg",
        collection: "Classic Denim",
        about: "Straight leg jeans with a traditional cut and timeless blue wash."
    },
    {
        title: "DAEJEON RIPPED DENIM",
        price: "Rs 4,799.00",
        save: "SAVE RS 1,100.00",
        thumbnail: "../assest/men/jeans/(03).jpg",
        collection: "Street Style",
        about: "Ripped denim jeans for a bold, edgy streetwear look."
    },
    {
        title: "ANDONG TAPERED FIT JEANS",
        price: "Rs 4,599.00",
        save: "SAVE RS 999.00",
        thumbnail: "../assest/men/jeans/(04).jpg",
        collection: "Smart Casual",
        about: "Tapered jeans that offer a tailored fit from hip to ankle."
    },
    {
        title: "SUNCHEON LIGHT WASH JEANS",
        price: "Rs 3,750.00",
        save: "SAVE RS 850.00",
        thumbnail: "../assest/men/jeans/(05).jpg",
        collection: "Summer Denim",
        about: "Light wash denim for casual summer days and laid-back weekends."
    },
    {
        title: "YEOSU SKINNY JEANS",
        price: "Rs 4,250.00",
        save: "SAVE RS 1,000.00",
        thumbnail: "../assest/men/jeans/(06).jpg",
        collection: "Modern Fit",
        about: "Skinny fit jeans designed for a sharp, form-hugging silhouette."
    },
    {
        title: "ICHEON BLACK DENIM JEANS",
        price: "Rs 4,499.00",
        save: "SAVE RS 950.00",
        thumbnail: "../assest/men/jeans/(07).jpg",
        collection: "Essentials",
        about: "Classic black denim jeans — versatile and easy to pair with any top."
    },
    {
        title: "CHUNCHEON DISTRESSED JEANS",
        price: "Rs 4,899.00",
        save: "SAVE RS 1,200.00",
        thumbnail: "../assest/men/jeans/(08).jpg",
        collection: "Urban Wear",
        about: "Distressed jeans with faded details for a rugged, urban look."
    },
    {
        title: "GIMHAE BOOTCUT JEANS",
        price: "Rs 3,999.00",
        save: "SAVE RS 850.00",
        thumbnail: "../assest/men/jeans/(09).jpg",
        collection: "Retro Denim",
        about: "Bootcut jeans inspired by vintage fashion — flared and flattering."
    },
    {
        title: "GEOJE RAW DENIM",
        price: "Rs 5,250.00",
        save: "SAVE RS 1,500.00",
        thumbnail: "../assest/men/jeans/(10).jpg",
        collection: "Premium Denim",
        about: "Raw, untreated denim that molds to your body over time — durable and unique."
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
