// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
// - console.log(ville) dans le if affichera "Kinshasa".
// - console.log(commune) hors du if plantera : ReferenceError, car commune (const) n'existe que dans le bloc.
// - Comme le programme s'arrête à cette erreur, la suite (afficher, secret) ne sera jamais atteinte.
// - Même problème prévu pour secret : il n'existe que dans la fonction.

// Réponse consigne 2 : la fonction afficher ne s'exécute jamais, car le programme plante à la ligne console.log(commune) avant de l'atteindre.

// Code corrigé (déclarations sorties des blocs) :
const ville = 'Kinshasa';
let commune; // déclarée dehors, donc visible partout

if (true) {
  commune = 'Gombe'; // on assigne seulement dans le bloc
  console.log(ville);
}
console.log(commune);

const secret = 'pondu'; // déclarée dehors, donc visible partout
const afficher = () => {
  return secret;
};
console.log(afficher());
console.log(secret);
