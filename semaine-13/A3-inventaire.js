// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A3 — L'inventaire en console (Niveau 3 — Avancé)

Objectif : manipuler un tableau d'objets avec .filter(), .map() et .find(), et gérer le cas undefined.
Contexte : la boutique de Kadea Academy veut suivre son stock (prix fictifs).

Consignes :
1. Crée ce tableau d'objets (propriétés : id, nom, categorie, prixFC, stock) :
   101 | Clé USB 32 Go    | Informatique | 14000 | 25
   102 | Sac à dos Kadea  | Accessoires  | 42000 | 0
   103 | Souris sans fil  | Informatique | 28000 | 12
   104 | Gourde isotherme | Accessoires  | 21000 | 8
   105 | Casque audio     | Informatique | 70000 | 0
   106 | Carnet de notes  | Papeterie    | 7000  | 40
2. Affiche-le avec console.table().
3. Avec .filter(), garde la catégorie Informatique.
4. Avec .map(), ajoute un prixUSD arrondi, avec const TAUX = 2800; (taux fictif).
5. Avec .find(), écris chercherProduit(id) qui renvoie le produit ou le message Produit introuvable.
6. Compte les produits en rupture de stock.

Résultat attendu :
3 produits Informatique (101, 103, 105) ; prix USD 5, 15, 10, 8, 25, 3 ;
chercherProduit(104) -> la gourde ; chercherProduit(999) -> Produit introuvable ; 2 produits en rupture.

Recherche (à rédiger dans RECHERCHES.md) :
Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
 const produits = [
  { id: 101, nom: "Clé USB 32 Go", categorie: "Informatique", prixFC: 14000, stock: 25 },
  { id: 102, nom: "Sac à dos Kadea", categorie: "Accessoires", prixFC: 42000, stock: 0 },
  { id: 103, nom: "Souris sans fil", categorie: "Informatique", prixFC: 28000, stock: 12 },
  { id: 104, nom: "Gourde isotherme", categorie: "Accessoires", prixFC: 21000, stock: 8 },
  { id: 105, nom: "Casque audio", categorie: "Informatique", prixFC: 70000, stock: 0 },
  { id: 106, nom: "Carnet de notes", categorie: "Papeterie", prixFC: 7000, stock: 40 },
];

// 2. Affichage en tableau
console.table(produits);

// 3. filter : garder la catégorie Informatique
const informatique = produits.filter((produit) => produit.categorie === "Informatique");
console.log(`${informatique.length} produits Informatique (${informatique.map((produit) => produit.id).join(", ")})`);

// 4. map : ajouter prixUSD arrondi
const TAUX = 2800; // taux fictif
const produitsAvecUsd = produits.map((produit) => ({
  ...produit,
  prixUSD: Math.round(produit.prixFC / TAUX),
}));
console.log(`Prix USD : ${produitsAvecUsd.map((produit) => produit.prixUSD).join(", ")}`);

// 5. find : chercher un produit, gérer le cas undefined
const chercherProduit = (id) => {
  const produit = produits.find((element) => element.id === id);
  return produit === undefined ? "Produit introuvable" : produit;
};
console.log(chercherProduit(104));
console.log(chercherProduit(999));

// 6. Produits en rupture de stock
const enRupture = produits.filter((produit) => produit.stock === 0);
console.log(`${enRupture.length} produits en rupture`);



