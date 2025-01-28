// // Choisir une option
// function choisirOption(option) {
//   if (option === "SLAM") {
//     console.log("Vous avez choisi l'option SLAM - Développement d'applications.");
//     console.log("Mission : Développer une application de gestion de stocks.");
//     // Code de la mission SLAM ici...
//     ajouterProduit("Clé Bluetooth", 10, 25);
//     afficherStock();
//   } else if (option === "SISR") {
//     console.log("Vous avez choisi l'option SISR - Gestion de systèmes et réseaux.");
//     console.log("Mission : Configurer un réseau local et gérer les utilisateurs.");
//     // Code de la mission SISR ici...
//     ajouterUtilisateur("David", "Administrateur");
//     afficherUtilisateurs();
//     sauvegardeRéseau();
//   } else {
//     console.log("Option invalide. Choisissez 'SLAM' ou 'SISR'.");
//   }
// }

// // Exemple d'appel pour choisir une mission
// choisirOption("SLAM");  // Choisir SLAM
// choisirOption("SISR");  // Choisir SISR



function choisirOption(option) {
  if (option === "SLAM") {
      alert("Vous avez choisi l'option SLAM - Développement d'applications.");
      // Rediriger vers la page SLAM
      window.location.href = "SLAM.html";  // Exemple de redirection vers une page SLAM
  } else if (option === "SISR") {
      alert("Vous avez choisi l'option SISR - Gestion de systèmes et réseaux.");
      // Rediriger vers la page SISR
      window.location.href = "SISR.html";  // Exemple de redirection vers une page SISR
  } else {
      alert("Option invalide. Veuillez choisir entre SLAM ou SISR.");
  }
}