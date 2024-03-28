// Example product data
const products = [
    { id: 1, name: "Running Shoes", price: 50 },
    { id: 2, name: "Sneakers", price: 40 },
    { id: 3, name: "Boots", price: 80 },
    // Add more products here
];

// Function to display products on the homepage
function displayProducts() {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = "";
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // Logic to add product to cart
    console.log(`Product with ID ${productId} added to cart.`);
}

// Display products when the page loads
window.onload = function() {
    displayProducts();
};
