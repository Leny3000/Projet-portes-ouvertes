const stock = [
    { name: "Produit A", quantity: 50, price: 20 },
    { name: "Produit B", quantity: 30, price: 15 },
    { name: "Produit C", quantity: 100, price: 10 }
];

document.getElementById('showStockButton').addEventListener('click', function () {
    const stockList = document.getElementById('stockList');
    stockList.innerHTML = ""; // Clear the current list

    stock.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.quantity} unités - ${product.price} € chacun`;
        stockList.appendChild(li);
    });
});