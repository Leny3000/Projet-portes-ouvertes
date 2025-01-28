document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const confirmation = document.getElementById('confirmation');

    if (username && role) {
        confirmation.textContent = `Utilisateur ${username} ajouté avec le rôle ${role}.`;
        confirmation.style.color = 'green';
    } else {
        confirmation.textContent = "Veuillez remplir tous les champs.";
        confirmation.style.color = 'red';
    }
});