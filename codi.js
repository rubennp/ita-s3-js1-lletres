// Exercici 1

let nom = ['R', 'u', 'b', 'è', 'n'];
// let nom = ['A','l','e','j','a','n','d','r','o'];
// let nom = ['A','r','i','a','d','n','a'];

for (let c in nom) console.log(nom[c]);

// Exercici 2

console.log("Partim del nom " + nom.join('').toUpperCase());

for (let c in nom) {
    let ch = nom[c].toUpperCase();
    if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')
        console.log("He trobat la VOCAL: " + ch);
    else if (ch >= '0' && ch <= '9') 
        console.log("Els noms de persones no contenen el número: " + ch);
    else 
        console.log("He trobat la CONSONANT: " +  ch);
}

// Exercici 3

let mNom = new Map();

for (let c in nom) {
    let ch = nom[c].toUpperCase();
    if (mNom.has(ch))
        mNom.set(ch, mNom.get(ch) + 1);
    else mNom.set(ch, 1);
}

console.log(mNom);

// Exercici 4

let cognom = ['N', 'i', 'e', 't', 'o'];

let nomCognom = nom.concat(" ").concat(cognom);

console.log(nomCognom);