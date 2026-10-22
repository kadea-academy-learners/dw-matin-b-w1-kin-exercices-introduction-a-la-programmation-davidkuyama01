// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
const maxEssais = 7;
const nombreMystere = Math.floor(Math.random() * 100) + 1;

let essais = 0;
let trouve = false;

while (!trouve && essais < maxEssais) {
  const saisie = prompt(
    `Devine le nombre entre 1 et 100 (essai ${essais + 1}/${maxEssais})`
  );

  // Bouton Annuler : prompt() renvoie null
  if (saisie === null) {
    console.log("Partie annulée.");
    break;
  }

  const proposition = Number(saisie);

  // Saisie invalide (« abc », vide) : on refuse sans compter l'essai
  if (saisie.trim() === "" || Number.isNaN(proposition)) {
    console.log("Ce n'est pas un nombre, réessaie !");
    continue;
  }

  essais++;

  if (proposition === nombreMystere) {
    trouve = true;
    console.log(`Trouvé en ${essais} essais !`);
  } else if (proposition < nombreMystere) {
    console.log("Plus grand !");
  } else {
    console.log("Plus petit !");
  }
}

// Essais épuisés sans avoir trouvé
if (!trouve && essais === maxEssais) {
  console.log(`Perdu ! Le nombre était ${nombreMystere}.`);
}




