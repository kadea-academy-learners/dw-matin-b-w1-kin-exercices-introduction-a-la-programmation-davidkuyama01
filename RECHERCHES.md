# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
typeof null renvoie "objet" à cause d'un comportement historique de javaScript pour assurer
la comptabilité avec les anciens programmes.Pourtant, null représente l'absence volontaire de
valeur et n'est pas un objet. c'est une particularité du langage qu'il faut connaître.Pour vérifier si une valeur est exactement null,
on peut utiliser valeur === null, typeof null renvoie "object", mais cela ne veut pas dire que null est réellement un objet.

...

**Mon test dans la console :**
console.log(typeof null);

```js
// colle ici le test que tu as exécuté et le résultat obtenu
console.log(typeof null);
résultat : "object"

```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée : chatGPT
Prompt : Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
vérification MDN : null représente l'absence volontaire de
valeur et n'est pas un objet.

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
NaN(Not-A-Number) est une propriéte de l'objet global qui répresente une valeur et pas un nombre. Elle est produite quand une oprération arithmétique donne un résultat indéfini ou non représentable.
pourquoi NaN === NaN renvoie false? les opérateurs d'égalité considèrent que NaN n'est oas égale à elle-même.
La fonction pour la détecter est Number.isNaN(valeur): renvoie true uniquement si la valeur est NaN, sans conversion. C'est la methode recommandée.

...

**Mon test dans la console :**
console.log(NaN === NaN);  = false
console.log(Number.isNaN(NaN));   = true 
console.log(Number.isNaN('abc')); = false
console.log(isNaN('abc'));  = true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN

**IA utilisée ? (prompt + vérification sur MDN) :** non
oui claude
prompt : Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?
vérification : c'est la même chose

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
-7 % 2 renvoie -1. L'opérateur % donne le reste de la division et le resultat prend le signe du premier (ici -7).
Donc pour nombre impair négatif , le reste est -1 et non 1.
Le test n % 2 === 1 échoue pour -7 alors qu'il est bien impair .
Le test n % 2 !== o focntionne pour tous les entiers : un nombre impair a toujours un reste différent de 0 (1 ou -1) .

...

**Mon test dans la console :**
console.log(-7 % 2);    resultat = -1
console.log(-7 % 2 === 1); resultat = false
console.log(-7 % 2 !== 0);  resultat = true 
console.log(-7 % 2 !== 0);   resultat = true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt : Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.
vérification: c'est la même réponse sur mdn

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Oui, on peut enchaîner plusieurs ternaires : si la condition est fausse, on met un autre ternaire à la place de la valeur "sinon".
Cela revient à écrire une suite de if / else if.
C'est souvent déconseillé car le code devient vite difficile à lire, à déboguer et à modifier.
Quand il y a plus de deux cas, mieux vaut utiliser if / else if ou switch.
...

**Mon test dans la console :**
const age = 15;
const categorie = age < 12 ? 'enfant' : age < 18 ? 'ado' : 'adulte';
console.log(categorie);
résultat = ado

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt :  Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
On peut enlever les parenthèses autour du paramètre quand il y en a un seul : x => x * 2.
Avec zéro paramètre ou plusieurs, les parenthèses restent obligatoires : () => 5 ou (a, b) => a + b.
On peut enlever les accolades et return quand la fonction ne contient qu'une seule expression : la valeur est alors renvoyée automatiquement.
Si on utilise des accolades, il faut écrire return soi-même.
...

**Mon test dans la console :**
const double = x => x * 2;
const somme = (a, b) => a + b;
const avecAccolades = (a, b) => {
  return a + b;
};

console.log(double(4));  resultat : 8
console.log(somme(2, 3)); resultat : 5
console.log(avecAccolades(2, 3)); resultat : 5

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utlisée ? oui claude
prompt :  Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?
 vérification sur MDN : même réponse



## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
continue sert à sauter le tour actuel de la boucle et à passer directement au tour suivant.
break arrête complètement la boucle, il n'y a plus de tour après.
Avec continue, la boucle continue de tourner. Avec break, elle s'arrête.

...

**Mon test dans la console :**
for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  console.log(i);
}
resultat : 1, 3

for (let i = 1; i <= 3; i++) {
  if (i === 2) break;
  console.log(i);
}
resultat : 1
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/break

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt : À quoi sert le mot-clé continue ? Quelle différence avec break ?
 vérification sur MDN : réponse identique


## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
