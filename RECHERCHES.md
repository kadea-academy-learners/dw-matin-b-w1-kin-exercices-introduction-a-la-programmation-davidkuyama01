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
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée : chatGPT
Prompt : Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
vérification MDN : vérifié sur MDN

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
vérification : vérifié sur MDN

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
vérification: vérifié sur MDN

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
vérifié sur MDN

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
 vérification sur MDN : vérifié sur MDN 



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
 vérification sur MDN : vérifié sur MDN


## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
FizzBuzz est célèbre car c'est un exercice très simple qui permet de vérifier vite si un candidat sait vraiment programmer.
Il demande de maîtriser une boucle, le modulo (%) et les conditions if / else if.
Le piège est l'ordre des conditions : il faut tester les multiples de 3 et de 5 en premier, sinon le message combiné n'apparaît jamais.
Beaucoup de candidats échouent sur ce détail, d'où sa popularité en entretien.

...

**Mon test dans la console :**
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("MalewaWewa");
  } else if (i % 5 === 0) {
    console.log("Wewa");
  } else if (i % 3 === 0) {
    console.log("Malewa");
  } else {
    console.log(i);
  }
}
resultat :  1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
wikipedia
https://en.wikipedia.org/wiki/Fizz_buzz

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt : Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
toLocaleString() convertit un nombre en texte selon les habitudes d'une langue ou d'un pays.
En lui donnant 'fr-FR', il sépare les milliers par un espace : 75000 devient 75 000.
On l'écrit ainsi : (75000).toLocaleString('fr-FR').
Le résultat est du texte (string), plus un nombre.
...

**Mon test dans la console :**
const montant = 75000;
console.log(montant.toLocaleString('fr-FR')); resultat :  75 000
console.log(montant.toLocaleString('en-US')); resultat :  75,000

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt : Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?
vérifié sur MDN

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les valeurs falsy sont celles que JavaScript considère comme fausses dans une condition.
La liste complète : false, 0, -0, 0n (BigInt zéro), "" (texte vide), null, undefined et NaN.
Il y en a plus que dans l'exercice car -0 et 0n s'ajoutent à 0.
Toutes les autres valeurs sont truthy, y compris "0", " " (espace), [] et {}.
...

**Mon test dans la console :**
console.log(Boolean(0));      resultat : false
console.log(Boolean(""));     resultat : false
console.log(Boolean(null));   resultat : false
console.log(Boolean("0"));    resultat : true
console.log(Boolean([]));     rsultat :  true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Glossary/Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude
prompt : Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)
vérifié sur MDN

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
L'opérateur ?? renvoie la valeur de droite seulement si la valeur de gauche est null ou undefined.
L'opérateur || renvoie la valeur de droite si la valeur de gauche est falsy (0, "", false, NaN, null, undefined).
La différence : avec ||, un score de 0 est remplacé par la valeur par défaut, alors qu'avec ?? le 0 est gardé.
?? est donc plus précis quand 0 ou "" sont des valeurs valides.
...

**Mon test dans la console :**
const score = 0;

console.log(score || 10);  // 10 (0 est falsy, donc remplacé)
console.log(score ?? 10);  // 0  (0 n'est ni null ni undefined, donc gardé)

console.log(null ?? 10);       resultat : 10
console.log(undefined ?? 10);  resultat : 10

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? oui claude comme IA
prompt : Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?
vérification : vérifié sur MDN

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
var est banni du code moderne parce qu'il a une portée de fonction et non de bloc. Une variable var déclarée dans un if ou une boucle reste visible partout dans la fonction, ce qui crée des bugs. Il est aussi concerné par le hoisting : la déclaration est remontée en haut, avec la valeur undefined. On peut donc utiliser la variable avant de la déclarer, sans erreur. De plus, var permet de déclarer deux fois le même nom sans avertissement. let et const ont une portée de bloc et interdisent d'utiliser la variable avant sa déclaration
...

**Mon test dans la console :**
// Test 1 : portée de var (fonction) contre let (bloc)
if (true) {
  var a = 'visible dehors';
  let b = 'invisible dehors';
}
console.log(a);         // la variable var sort du bloc
console.log(typeof b);  // let reste dans le bloc

// Test 2 : hoisting de var
console.log(c);         // utilisée avant sa ligne de déclaration
var c = 5;

// Test 3 : let avant sa déclaration
try {
  console.log(d);
} catch (erreur) {
  console.log(erreur.name);
}
let d = 5; 
resultat : visible dehors
resultat : undefined
resultat : undefined
resultat : ReferenceError

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
var (portée de fonction, remontée, redéclaration) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let
Hoisting (remontée) : https://developer.mozilla.org/fr/docs/Glossaire/Hoisting

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée claude
prompt : Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting »
vérification sur MDN : confirmation, La portée d'une variable déclarée avec var est la fonction qui contient la déclaration, ou le contexte global si elle est déclarée hors de toute fonction. 
let déclare une variable dont la portée est celle du bloc courant, alors que var a pour portée la fonction englobante. 
Le hoisting correspond au déplacement de la déclaration de fonctions, variables ou classes en haut de leur portée avant l'exécution du code. 

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
L'insertion automatique de point-virgule (ASI) est un mécanisme de JavaScript qui ajoute lui-même les ; manquants à la fin des lignes. Il s'applique aussi après return : si la valeur est sur la ligne suivante, JavaScript lit return; et renvoie undefined. Pour l'éviter, on écrit la valeur sur la même ligne que return (ou on l'entoure de parenthèses) et on met toujours les ;.
...

**Mon test dans la console :**
console.log(doubler(4)); resultat : 8
console.log(total);      resultat : 660
console.log(saluer('Ney')); resultat : Mbote Ney

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
Page return : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/return
Page Grammaire lexicale : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? NON 

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les opérateurs d'affectation composée raccourcissent x = x opérateur y en x opérateur= y. Il y en a 15 : +=, -=, =, /=, %=, *=, <<=, >>=, >>>=, &=, |=, ^=, &&=, ||= et ??=. »
...

**Mon test dans la console :**
let x;

x = 5;   x += 3;    console.log(x); // 8    (addition)
x = 5;   x -= 2;    console.log(x); // 3    (soustraction)
x = 5;   x *= 2;    console.log(x); // 10   (multiplication)
x = 10;  x /= 2;    console.log(x); // 5    (division)
x = 10;  x %= 3;    console.log(x); // 1    (reste)
x = 2;   x **= 3;   console.log(x); // 8    (exponentiation : 2 puissance 3)

x = 5;   x <<= 1;   console.log(x); // 10   (décalage à gauche)
x = 5;   x >>= 1;   console.log(x); // 2    (décalage à droite)
x = 5;   x >>>= 1;  console.log(x); // 2    (décalage à droite non signé)
x = 5;   x &= 3;    console.log(x); // 1    (ET binaire)
x = 5;   x |= 3;    console.log(x); // 7    (OU binaire)
x = 5;   x ^= 3;    console.log(x); // 6    (OU exclusif binaire)

x = 1;    x &&= 5;  console.log(x); // 5    (ET logique : affecte si x est truthy)
x = 0;    x ||= 10; console.log(x); // 10   (OU logique : affecte si x est falsy)
x = null; x ??= 7;  console.log(x); // 7    (coalescence des nuls : affecte si x est null ou undefined)

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
Liste de tous les opérateurs d'affectation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators
Page de -= (avec exemples) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment
Page de &= (avec exemples) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utlisée? non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La boucle while teste la condition avant chaque tour. Si la condition est fausse dès le départ, le bloc ne s'exécute jamais. La boucle do...while exécute d'abord le bloc, puis teste la condition après, donc elle fait au moins un tour, même si la condition est fausse.
Pour l'étape 4 (départ à 15 %) :
Avec while : 15 > 20 est faux, donc 0 tour. La batterie reste à 15 % et le compteur à 0 h.
Avec do...while : le bloc s'exécute une fois (15 − 15 = 0 %, 1 h), puis 0 > 20 est faux et la boucle s'arrête. Résultat : 1 tour, batterie à 0 %, après 1 h.

...

**Mon test dans la console :**
let batterie = 15;
let compteurHeure = 0;

do {
  batterie -= 15;
  compteurHeure++;
} while (batterie > 20);

console.log(Après ${compteurHeure} h, batterie à ${batterie} % : branche ton téléphone !);
// Après 1 h, batterie à 0 % : branche ton téléphone !

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée claude ?  oui 
prompt : Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?
vérification sur MDN : La condition d'un do...while est testée après l'exécution de l'instruction, donc le bloc est exécuté au moins une fois.


## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
JavaScript stocke les nombres décimaux en binaire (64 bits, norme IEEE 754). Certaines décimales, comme 0.1 et 0.2, ne tombent pas juste en binaire, un peu comme 1/3 donne 0,333… en décimal. L'ordinateur les arrondit donc légèrement, et 0.1 + 0.2 donne 0.30000000000000004 au lieu de 0.3. toFixed() est un piège pour continuer à calculer parce qu'il renvoie une chaîne de caractères (string) et non un nombre. Si on additionne ensuite cette chaîne avec un nombre, JavaScript concatène au lieu d'additionner. Il faut la reconvertir avec Number().
...

**Mon test dans la console :**
console.log(0.1 + 0.2);                 resultat :  0.30000000000000004
console.log(0.1 + 0.2 === 0.3);         resultat : false

const somme = (0.1 + 0.2).toFixed(2);
console.log(somme);                     resultat : "0.30"
console.log(typeof somme);              resultat : string
console.log(somme + 1);                 resultat : "0.301" (concaténation, pas une addition)
console.log(Number(somme) + 1);         resultat : 1.3 (correct après conversion)

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true (bonne façon de comparer)

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
MDN, page toFixed() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Explication de 0.1 + 0.2 : https://explainthis.io/en/swe/js-zero-point-one-plus-zero-point-two

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? OUI claude
prompt : Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?
vérification sur MDN : toFixed() renvoie une chaîne de caractères qui représente le nombre avec une notation à point fixe.  (mozilla)
Ce résultat étrange vient du fait que JavaScript utilise des nombres binaires à virgule flottante en double précision sur 64 bits (IEEE 754), comme la plupart des langages. 



## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La méthode .reduce() parcourt un tableau et le réduit à une seule valeur (un total, un maximum, etc.). Elle appelle une fonction pour chaque élément. Cette fonction reçoit l'accumulateur (le résultat gardé depuis le tour précédent) et l'élément courant. Ce qu'elle renvoie devient l'accumulateur du tour suivant. Le deuxième argument de reduce est la valeur de départ de l'accumulateur (ici 0). Contrairement à forEach, il n'y a pas besoin de variable let total à l'extérieur : reduce renvoie directement le résultat.

...

**Mon test dans la console :**
Étape 2 réécrite avec .reduce() :
const heuresSemaine = [8, 9, 10, 8, 7, 6];

const total = heuresSemaine.reduce((accumulateur, heures) => accumulateur + heures, 0);
console.log(total); // 48

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? OUI claude
prompt : La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
vérification sur MDN : educe() applique une fonction « accumulateur » à chaque valeur du tableau, de gauche à droite, pour la réduire à une seule valeur.  (mozilla)
Au premier appel, l'accumulateur vaut la valeur initiale si elle est fournie, sinon le premier élément du tableau. 


## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Pour afficher seulement les colonnes nom et stock, on passe un deuxième argument à console.table() : un tableau avec les noms des colonnes, par exemple console.table(produits, ["nom", "stock"]). Quand rien ne correspond, .find() renvoie undefined, alors que .filter() renvoie un tableau vide []. Il faut donc tester undefined après un find, tandis qu'après un filter on regarde plutôt .length === 0.

...

**Mon test dans la console :**
console.table(produits, ["nom", "stock"]);          // seulement 2 colonnes (+ la colonne (index))
console.log(produits.find((produit) => produit.id === 999));          // undefined
console.log(produits.filter((produit) => produit.categorie === "Vêtements")); // []
console.log(produits.filter((produit) => produit.categorie === "Vêtements").length); // 0

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
[18:27, 16/10/2026] david maestro😎: .length === 0.
[18:28, 16/10/2026] david maestro😎: console.table() : https://developer.mozilla.org/fr/docs/Web/API/console/table
find() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
filter() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ? OUI claude 
prompt : Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?
 vérification sur MDN : Le paramètre facultatif columns de console.table() permet de ne choisir qu'un sous-ensemble de colonnes à afficher.  
Si la fonction de test ne renvoie jamais de valeur vraie, find() retourne undefined.  
Si aucun élément ne passe le test, filter() renvoie un tableau vide.  


## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Pour classer de la meilleure à la moins bonne moyenne, on utilise .sort() avec une fonction de comparaison : bulletin.sort((a, b) => b.moyenne - a.moyenne). Si b - a est positif, b passe devant a, donc l'ordre est décroissant. .sort() modifie le tableau d'origine : il trie « en place » et renvoie une référence vers ce même tableau, pas une copie. Pour l'éviter, on trie une copie : [...bulletin].sort(...), ou bulletin.toSorted(...) qui renvoie un nouveau tableau.

...

**Mon test dans la console :**
const classement = [...bulletin].sort((a, b) => b.moyenne - a.moyenne);
console.log(classement.map((eleve) => eleve.nom).join(", "));
// Bijou, Exaucé, Amani, Divine, Christian

console.log(bulletin.map((eleve) => eleve.nom).join(", "));
// Amani, Bijou, Christian, Divine, Exaucé (le tableau d'origine n'a pas changé)

// Preuve que sort() modifie l'original quand on ne copie pas :
const mauvais = bulletin.sort((a, b) => b.moyenne - a.moyenne);
console.log(mauvais === bulletin); // true (même tableau)
console.log(bulletin.map((eleve) => eleve.nom).join(", "));
// Bijou, Exaucé, Amani, Divine, Christian (l'original est trié)

// Sans fonction de comparaison, les nombres sont triés comme du texte :
console.log([10, 9, 1].sort()); // [1, 10, 9]


```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
sort() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utilisée ?  OUI claude
prompt :  Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?
vérification sur MDN : sort() trie les éléments d'un tableau en place et retourne la référence vers ce même tableau, désormais trié.  
Pour comparer des nombres plutôt que des chaînes, la fonction de comparaison peut soustraire b à a.  
On peut aussi faire une copie superficielle avant d'appeler sort(), avec l'opérateur de propagation ou Array.from().  


## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La recherche dichotomique consiste à couper le problème en deux à chaque essai : on propose toujours le nombre du milieu de l'intervalle restant. Si la réponse est « plus grand », on garde la moitié haute, sinon la moitié basse. L'intervalle est divisé par 2 à chaque essai : 100 → 50 → 25 → 12 → 6 → 3 → 2 → 1. Avec 7 essais, on peut départager 2⁷ = 128 nombres, ce qui couvre largement 1 à 100. Avec 6 essais, on n'en couvre que 64, ce qui ne suffit pas toujours. C'est pourquoi 7 essais suffisent toujours.

...

**Mon test dans la console :**
console.log(pire);              // 7 (le pire cas)

// Pièges de la saisie
console.log(Number("abc"));     // NaN
console.log(Number(""));        // 0 (piège : un champ vide ressemble à un nombre)
console.log(Number(null));      // 0 (piège : le bouton Annuler)

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 
MDN, prompt() : https://developer.mozilla.org/fr/docs/Web/API/Window.prompt
Dichotomie (article de l'IREM de Nantes) : https://bibnum.publimath.fr/IWR/IWR16005.pdf

**IA utilisée ? (prompt + vérification sur MDN) :** non
IA utlisée ? oui claude 
prompt :  Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
vérification sur MDN : prompt() renvoie le texte saisi, ou null si l'utilisateur annule.  (mozilla)
Le résultat de prompt() est une chaîne de caractères, donc il faut parfois le convertir, par exemple avec Number().  (mozilla)
La dichotomie consiste à couper un problème en deux, et pour un nombre d'étages égal à une puissance de 2, le nombre de tests effectués est égal au logarithme en base 2 de ce nombre.

