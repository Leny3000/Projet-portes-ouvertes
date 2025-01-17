// Base de données des produits
let stock = [
  { id: 1, nom: "Clé USB", quantité: 20, prix: 10 },
  { id: 2, nom: "Câble HDMI", quantité: 15, prix: 5 },
];

// Fonction pour ajouter un produit
function ajouterProduit(nom, quantité, prix) {
  const id = stock.length + 1;
  stock.push({ id, nom, quantité, prix });
  console.log("Produit ajouté:", nom);
}

// Fonction pour supprimer un produit
function supprimerProduit(id) {
  stock = stock.filter(produit => produit.id !== id);
  console.log("Produit supprimé:", id);
}

// Fonction pour afficher tous les produits
function afficherStock() {
  console.log("Stock actuel:");
  stock.forEach(produit => {
    console.log(`${produit.nom} - Quantité: ${produit.quantité} - Prix: ${produit.prix}€`);
  });
}

// Ajouter un produit
ajouterProduit("Souris sans fil", 30, 12);

// Supprimer un produit
supprimerProduit(1);

// Afficher le stock
afficherStock();