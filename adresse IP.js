document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const ip = document.getElementById('ipAddress').value;
    const confirmation = document.getElementById('confirmation');

    // Vérification simple du format d'IP
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ipRegex.test(ip)) {
        confirmation.textContent = `Adresse IP ${ip} configurée avec succès !`;
        confirmation.style.color = 'green';
    } else {
        confirmation.textContent = "Adresse IP invalide, veuillez entrer un format correct.";
        confirmation.style.color = 'red';
    }
});