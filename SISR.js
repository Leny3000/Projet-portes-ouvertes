// Liste des utilisateurs et leurs droits
let utilisateurs = [
  { nom: "Alice", rôle: "Administrateur" },
  { nom: "Bob", rôle: "Utilisateur standard" },
];

// Fonction pour ajouter un utilisateur
function ajouterUtilisateur(nom, rôle) {
  utilisateurs.push({ nom, rôle });
  console.log("Utilisateur ajouté:", nom);
}

// Fonction pour afficher tous les utilisateurs
function afficherUtilisateurs() {
  console.log("Utilisateurs enregistrés:");
  utilisateurs.forEach(utilisateur => {
    console.log(`${utilisateur.nom} - Rôle: ${utilisateur.rôle}`);
  });
}

// Fonction pour simuler une sauvegarde
function sauvegardeRéseau() {
  console.log("Sauvegarde du réseau en cours...");
  setTimeout(() => {
    console.log("Sauvegarde terminée avec succès!");
  }, 3000); // Simulation de 3 secondes pour la sauvegarde
}

// Ajouter un utilisateur
ajouterUtilisateur("Charlie", "Utilisateur standard");

// Afficher les utilisateurs
afficherUtilisateurs();

// Lancer une sauvegarde
sauvegardeRéseau();