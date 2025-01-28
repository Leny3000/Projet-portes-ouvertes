document.getElementById('backupButton').addEventListener('click', function () {
    const confirmation = document.getElementById('confirmation');
    
    // Simulation de sauvegarde
    confirmation.textContent = "Sauvegarde du réseau en cours...";
    confirmation.style.color = 'blue';

    // Après 2 secondes, confirmation de la sauvegarde
    setTimeout(() => {
        confirmation.textContent = "Sauvegarde terminée avec succès.";
        confirmation.style.color = 'green';
    }, 2000);
});