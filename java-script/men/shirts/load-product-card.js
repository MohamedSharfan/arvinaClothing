
const products = [
    {
        title: "DAEGU CLASSIC TSHIRT",
        price: "Rs 1,299.00",
        save: "SAVE RS 300.00",
        thumbnail: "../assest/men/tshirt/(01).jpg",
        collection: "Streetwear",
        about: "Classic round neck t-shirt with soft cotton and subtle branding."
    },
    {
        title: "SEOUL SLIM FIT TSHIRT",
        price: "Rs 1,499.00",
        save: "SAVE RS 350.00",
        thumbnail: "../assest/men/tshirt/(02).jpg",
        collection: "Essentials",
        about: "Slim-fit tshirt tailored for a snug and modern silhouette."
    },
    {
        title: "JEJU COLORBLOCK TSHIRT",
        price: "Rs 1,399.00",
        save: "SAVE RS 299.00",
        thumbnail: "../assest/men/tshirt/(03).jpg",
        collection: "Trendy Picks",
        about: "Colorblock cotton tshirt designed with bold panel layouts."
    },
    {
        title: "BUSAN V-NECK TSHIRT",
        price: "Rs 1,199.00",
        save: "SAVE RS 250.00",
        thumbnail: "../assest/men/tshirt/(04).jpg",
        collection: "Smart Casual",
        about: "Breathable V-neck t-shirt with minimal detailing for a clean look."
    },
    {
        title: "INCHEON PRINTED TSHIRT",
        price: "Rs 1,599.00",
        save: "SAVE RS 400.00",
        thumbnail: "../assest/men/tshirt/(05).jpg",
        collection: "Graphic Tees",
        about: "Stylish printed tshirt with bold front and back graphics."
    },
    {
        title: "ULSAN SPORT TSHIRT",
        price: "Rs 1,399.00",
        save: "SAVE RS 299.00",
        thumbnail: "../assest/men/tshirt/(06).jpg",
        collection: "Activewear",
        about: "Moisture-wicking sports t-shirt with stretch-fit technology."
    },
    {
        title: "GWANGJU STRIPED TSHIRT",
        price: "Rs 1,299.00",
        save: "SAVE RS 280.00",
        thumbnail: "../assest/men/tshirt/(07).jpg",
        collection: "Casual Wear",
        about: "Classic striped cotton tshirt perfect for casual weekends."
    },
    {
        title: "DAEJEON LONGLINE TSHIRT",
        price: "Rs 1,499.00",
        save: "SAVE RS 320.00",
        thumbnail: "../assest/men/tshirt/(08).jpg",
        collection: "Urban Style",
        about: "Longline t-shirt with drop shoulders and minimal styling."
    },
    {
        title: "SUNCHEON OVERSIZED TSHIRT",
        price: "Rs 1,399.00",
        save: "SAVE RS 300.00",
        thumbnail: "../assest/men/tshirt/(09).jpg",
        collection: "Oversized",
        about: "Oversized fit tshirt with bold branding and soft fabric feel."
    },
    {
        title: "GIMHAE BASIC TSHIRT",
        price: "Rs 1,099.00",
        save: "SAVE RS 200.00",
        thumbnail: "../assest/men/tshirt/(10).jpg",
        collection: "Everyday Basics",
        about: "Plain basic cotton t-shirt available in multiple solid colors."
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
