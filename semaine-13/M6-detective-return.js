// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Bug 1 : les accolades ouvrent un corps de fonction. Sans return,
// la fonction calcule n * 2 mais ne renvoie rien, donc undefined.
const doubler = (n) => {
  return n * 2;
};
console.log(doubler(4));

// Bug 2 : calculerTva affiche le résultat avec console.log mais ne le renvoie pas.
// total vaut donc undefined + 500, ce qui donne NaN. Il faut return.
const calculerTva = (prix) => {
  return prix * 0.16;
};
const total = calculerTva(1000) + 500;
console.log(total);

// Bug 3 : return suivi d'un retour à la ligne. JavaScript ajoute un point-virgule
// juste après return (ASI), donc la fonction renvoie undefined et le gabarit
// n'est jamais lu. Il faut mettre la valeur sur la même ligne que return.
const saluer = (prenom) => {
  return `Mbote ${prenom}`;
};
console.log(saluer('Ney'));