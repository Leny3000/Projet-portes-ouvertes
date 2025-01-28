// // Liste des utilisateurs et leurs droits
// let utilisateurs = [
//   { nom: "Alice", rôle: "Administrateur" },
//   { nom: "Bob", rôle: "Utilisateur standard" },
// ];

// // Fonction pour ajouter un utilisateur
// function ajouterUtilisateur(nom, rôle) {
//   utilisateurs.push({ nom, rôle });
//   console.log("Utilisateur ajouté:", nom);
// }

// // Fonction pour afficher tous les utilisateurs
// function afficherUtilisateurs() {
//   console.log("Utilisateurs enregistrés:");
//   utilisateurs.forEach(utilisateur => {
//     console.log(`${utilisateur.nom} - Rôle: ${utilisateur.rôle}`);
//   });
// }

// // Fonction pour simuler une sauvegarde
// function sauvegardeRéseau() {
//   console.log("Sauvegarde du réseau en cours...");
//   setTimeout(() => {
//     console.log("Sauvegarde terminée avec succès!");
//   }, 3000); // Simulation de 3 secondes pour la sauvegarde
// }

// // Ajouter un utilisateur
// ajouterUtilisateur("Charlie", "Utilisateur standard");

// // Afficher les utilisateurs
// afficherUtilisateurs();

// // Lancer une sauvegarde
// sauvegardeRéseau();

function choisirMission(option) {
  if (option === "Mission SISR : Configuration de l\'adresse IP") {
      alert("Vous avez choisi la mission Configuration de l'adresse IP.");
      window.location.href = "adresse IP.html";
  } else if (option === "Mission SISR : Ajouter un utilisateur") {
      alert("Vous avez choisi la mission Ajouter un utilisateur.");
      window.location.href = "utilisateurs.html";
  } else if (option === "Mission SISR : Sauvegarder le réseau") {
        alert("Vous avez choisi la mission Sauvegarder le réseau.");
        window.location.href = "sauvegarde.html";
  } else {
      alert("Option invalide. Veuillez choisir une mission.");
  }
}