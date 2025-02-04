const products = [
    {
        name: "Wireless Charger",
        description: "Fast charging wireless pad for your devices.",
        price: "$25.99",
        image: "https://via.placeholder.com/300x200.png?text=Wireless+Charger",
        link: "https://www.nike.com/t/air-force-1-07-shoes-rWtqPn"
    },
    {
        name: "Bluetooth Headphones",
        description: "High-quality sound with noise cancellation.",
        price: "$99.99",
        image: "https://via.placeholder.com/300x200.png?text=Bluetooth+Headphones",
        link: "https://www.nike.com/t/air-force-1-07-shoes-rWtqPn"
    },
    {
        name: "Portable Power Bank",
        description: "Compact power bank for your on-the-go charging.",
        price: "$45.00",
        image: "https://via.placeholder.com/300x200.png?text=Power+Bank",
        link: "https://www.nike.com/t/air-force-1-07-shoes-rWtqPn"
    }
];

const productContainer = document.getElementById('products');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button onclick="window.location.href='${product.link}'">View Product</button>
    `;

    productContainer.appendChild(productDiv);
});
