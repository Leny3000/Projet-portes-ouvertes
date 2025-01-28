document.getElementById('deleteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productDeleteName').value;
    const confirmation = document.getElementById('confirmation');

    if (name) {
        confirmation.textContent = `Produit "${name}" supprimé de l'inventaire.`;
        confirmation.style.color = 'green';
    } else {
        confirmation.textContent = "Veuillez entrer le nom du produit.";
        confirmation.style.color = 'red';
    }
});