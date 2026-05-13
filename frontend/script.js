async function fetchProducts() {

    const response = await fetch("http://localhost:5000/api/products");

    const products = await response.json();

    const productContainer = document.getElementById("products");

    products.forEach(product => {

        productContainer.innerHTML += `
        
        <div class="card">

            <img src="${product.image}" />

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>

        </div>
        
        `;
    });

}

fetchProducts();

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");

}