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

// 1. Nombre entier aléatoire entre 1 et 100
const nombreMystere = Math.floor(Math.random() * 100) + 1;

let essais = 0;
let trouve = false;

// 2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais
while (!trouve && essais < maxEssais) {
  const saisie = prompt(`Devine le nombre entre 1 et 100 (essai ${essais + 1}/${maxEssais})`);

  // Bouton Annuler : prompt() renvoie null, on arrête proprement
  if (saisie === null) {
    console.log("Partie annulée.");
    break;
  }

  const proposition = Number(saisie);

  // 3. Saisie refusée : texte, ou champ vide (Number("") vaut 0 !). L'essai n'est pas compté.
  if (saisie.trim() === "" || Number.isNaN(proposition)) {
    console.log(`${saisie} n'est pas un nombre : essai non compté.`);
    continue;
  }

  essais++;

  // 4. Réponses
  if (proposition === nombreMystere) {
    trouve = true;
    console.log(`Trouvé en ${essais} essai${essais > 1 ? "s" : ""} !`);
  } else if (proposition < nombreMystere) {
    console.log("Plus grand");
  } else {
    console.log("Plus petit");
  }
}

// 5. Essais épuisés : révéler le nombre
if (!trouve && essais === MAX_ESSAIS) {
  console.log(`Perdu ! Le nombre était ${nombreMystere}.`);
}




