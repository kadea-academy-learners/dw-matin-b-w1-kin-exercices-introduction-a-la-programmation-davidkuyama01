# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-22 15:30 UTC · commit `a9d2a14` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **11 / 15**

Exercices : **79 / 95** · Parfaits : 9 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• `let` jamais réassigné : `age`, `commune`, `estInscrit`, `ancienneFormation` → utilise `const`.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F2** — Le convertisseur de saisie | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Résultat correct, mais il manque une notion imposée : Number() ou tes explications/prédictions en commentaire.<br>• Explique en commentaire pourquoi le résultat est faux et note tes prédictions avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F4** — Le contrôleur du bus | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le calcul est juste, mais il faut un ternaire pour le statut, un `if / else if / else` pour le tarif et un gabarit littéral.<br>• `let` jamais réassigné : `statut` → utilise `const`.<br>• Message construit avec `+` (ligne 38) : utilise un gabarit littéral `...${x}...`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F5** — Ma première fonction fléchée | **3** | 🟠 Résultat incorrect | 3/4 | 3 | ✅ | Les fonctions ne renvoient pas le bon résultat : saluer('Lys') doit renvoyer « Mbote Lys ! » et carre(7) doit renvoyer 49 (avec return).<br>• `carre(-3)` renvoie -21 au lieu de 9.<br>• Message construit avec `+` (ligne 27, 27) : utilise un gabarit littéral `...${x}...`.<br>• Écris `saluer` sur une seule ligne avec retour implicite (sans accolades ni return).<br>• `saluer` doit utiliser un gabarit littéral.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F6** — Le compte à rebours | **2** | 🟠 Résultat incorrect | 0/2 | 3 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• On attend 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage ! (le 5 est sauté).<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M1** — FizzBuzz kinois | **3** | 🟠 Résultat incorrect | 2/3 | 3 | ✅ | Résultat incorrect : la condition la plus restrictive (multiple de 3 ET de 5) doit être testée en premier, sinon MalewaWewa n'est jamais affiché.<br>• La suite complète de 1 à 30 n'est pas correcte (bornes de la boucle ?).<br>• Explique en commentaire pourquoi l'ordre de tes conditions est important.<br>📚 Recherche complète ; privilégie une source MDN. |
| **M2** — Le distributeur automatique (DAB) | **3** | 🟠 Résultat incorrect | 7/9 | 3 | ✅ | Au moins un retrait renvoie le mauvais message : vérifie l'ordre des règles (montant invalide → plafond → solde) et les cas limites (négatif, 500 000 FC, solde exact).<br>• `retirer(100000, 25000)` renvoie 'Retrait accepté. Nouveau solde -75 000' au lieu de 'Retrait accepté. Nouveau solde : 75000 FC'.<br>• `retirer(100000, 100000)` renvoie 'Retrait accepté. Nouveau solde 0' au lieu de 'Retrait accepté. Nouveau solde : 0 FC'.<br>• `let` jamais réassigné : `nouveauSolde` → utilise `const`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **4** | 🟡 Règles non respectées | 11/11 | 3 | ✅ | `estRempli` donne les bons résultats, mais elle doit être fléchée, utiliser un ternaire et aucune comparaison.<br>• Note tes prédictions en commentaire avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M4** — Le score par défaut : \|\| contre ?? | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Le piège de `0 \|\| 'aucun'` est expliqué et corrigé à bon escient avec `??`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M5** — La vitre teintée (portée de bloc) | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Plus d'erreur, mais les déclarations doivent rester dans leurs blocs et tes prédictions/explications doivent être en commentaire.<br>• Ne déplace pas la déclaration de `commune` : elle doit rester dans le bloc if.<br>• Ne déplace pas la déclaration de `secret` : elle doit rester dans `afficher`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A2** — Le moteur de paie v2 | **3** | 🟠 Résultat incorrect | 5/7 | 3 | ✅ | Un résultat est faux : seules les heures AU-DELÀ de 40 sont payées × 1,5 (40 × 2500 + 8 × 3750 = 130000) ; le jour le plus chargé est mercredi.<br>• On attend « Total : 48 h ».<br>• On attend « Salaire : 130000 FC ».<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A4** — Le classement de la promo | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Fonctions, boucles, conditions et méthodes de tableau bien combinées ; bulletin vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A5** — Le nombre mystère | **5** | ✅ Parfait | 4/4 | 3 | ❌ | Parfait ! Jeu complet et robuste : saisies invalides refusées sans compter l'essai, 7 essais maximum.<br>📚 Recherche complète, testée et sourcée (MDN). |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (84 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (84 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Compétent : Satisfaisant (80 %) | **2** | Les fonctions renvoient leur résultat avec return (pas de console.log à l'intérieur) et sont appelées avec les bons arguments. Portée de bloc respectée : aucune ReferenceError.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (75 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Avancé (93 %) | **3** | RECHERCHES.md complet, testé et sourcé (MDN). Commits réguliers et explicites (un par exercice).<br>_Recherches 100 % · commits par exercice 95 % · règles de code 79 %_ |
| **Total** | | **11 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
