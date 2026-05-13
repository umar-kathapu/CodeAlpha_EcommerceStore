let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartItems");

let total = 0;

function displayCart() {

    cartContainer.innerHTML = "";

    total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartContainer.innerHTML += `
        
        <div class="card">

            <img src="${product.image}" />

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>
        
        `;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();

function placeOrder() {

    if (cart.length === 0) {

        alert("Cart is Empty");

        return;
    }

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    window.location.reload();
}