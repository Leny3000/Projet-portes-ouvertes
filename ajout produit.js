document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const quantity = document.getElementById('productQuantity').value;
    const price = document.getElementById('productPrice').value;
    const confirmation = document.getElementById('confirmation');

    if (name && quantity && price) {
        confirmation.textContent = `Produit "${name}" ajouté avec ${quantity} unités au prix de ${price} € chacun.`;
        confirmation.style.color = 'green';
    } else {
        confirmation.textContent = "Veuillez remplir tous les champs.";
        confirmation.style.color = 'red';
    }
});