# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-22 15:57 UTC · commit `1ddec81` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **14 / 15**

Exercices : **89 / 95** · Parfaits : 13 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• `let` jamais réassigné : `age`, `commune`, `estInscrit`, `ancienneFormation` → utilise `const`.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F2** — Le convertisseur de saisie | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Résultat correct, mais il manque une notion imposée : Number() ou tes explications/prédictions en commentaire.<br>• Explique en commentaire pourquoi le résultat est faux et note tes prédictions avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F4** — Le contrôleur du bus | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le calcul est juste, mais il faut un ternaire pour le statut, un `if / else if / else` pour le tarif et un gabarit littéral.<br>• `let` jamais réassigné : `statut` → utilise `const`.<br>• Message construit avec `+` (ligne 38) : utilise un gabarit littéral `...${x}...`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F5** — Ma première fonction fléchée | **4** | 🟡 Règles non respectées | 4/4 | 3 | ✅ | Les résultats sont bons, mais la version fléchée de `saluer` doit tenir sur une ligne avec un gabarit littéral et un retour implicite.<br>• Écris `saluer` sur une seule ligne avec retour implicite (sans accolades ni return).<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F6** — Le compte à rebours | **5** | ✅ Parfait | 2/2 | 3 | ✅ | Parfait ! Les 3 parties de la boucle `for` sont maîtrisées et `continue` est bien placé.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche complète ; privilégie une source MDN. |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **4** | 🟡 Règles non respectées | 11/11 | 3 | ✅ | `estRempli` donne les bons résultats, mais elle doit être fléchée, utiliser un ternaire et aucune comparaison.<br>• Note tes prédictions en commentaire avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M4** — Le score par défaut : \|\| contre ?? | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Le piège de `0 \|\| 'aucun'` est expliqué et corrigé à bon escient avec `??`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M5** — La vitre teintée (portée de bloc) | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Plus d'erreur, mais les déclarations doivent rester dans leurs blocs et tes prédictions/explications doivent être en commentaire.<br>• Ne déplace pas la déclaration de `commune` : elle doit rester dans le bloc if.<br>• Ne déplace pas la déclaration de `secret` : elle doit rester dans `afficher`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A4** — Le classement de la promo | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Fonctions, boucles, conditions et méthodes de tableau bien combinées ; bulletin vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A5** — Le nombre mystère | **5** | ✅ Parfait | 4/4 | 3 | ❌ | Parfait ! Jeu complet et robuste : saisies invalides refusées sans compter l'essai, 7 essais maximum.<br>📚 Recherche complète, testée et sourcée (MDN). |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (84 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Avancé (97 %) | **3** | Conditions ordonnées du cas le plus restrictif au plus général (FizzBuzz, DAB) et cas limites testés (0, négatif, plafond). ?? utilisé à bon escient.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Avancé (92 %) | **3** | Fonctions fléchées concises (retour implicite quand c'est pertinent), paramètres par défaut, une fonction pour une responsabilité. Bug de l'ASI et bannissement de var expliqués.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Avancé (100 %) | **3** | Boucle adaptée choisie (for / while). Tableaux d'objets traités avec .filter(), .map(), .find() et un return dans chaque callback ; cas undefined de .find() géré ; console.table() utilisé.<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Avancé (96 %) | **3** | RECHERCHES.md complet, testé et sourcé (MDN). Commits réguliers et explicites (un par exercice).<br>_Recherches 100 % · commits par exercice 95 % · règles de code 89 %_ |
| **Total** | | **14 / 15** | |

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
