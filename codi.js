// Exercici 1

let nom = ['R', 'u', 'b', '3', 'n'];

// converteix a majúscules cada element de l'array
Array.prototype.elToUpperCase = function() {
    this.forEach(function (el, index, array) { 
        array[index] = el.toUpperCase(); 
    });
};

nom.elToUpperCase();

nom.forEach(el => console.log(el));

// Exercici 2

console.log(`Partim del nom ${nom.join('')}`);

nom.forEach(ch => {
    if (/[AÀÁEÈÉIÍOÒÓUÚ]/i.test(ch)) console.log(`He trobat la VOCAL: ${ch}`);
    else if (/[0-9]/.test(ch)) console.log(`Els noms de persones no contenen el número: ${ch}`);
    else console.log(`He trobat la CONSONANT: ${ch}`);
});
    

// Exercici 3

let mapNom = new Map();

nom.forEach(ch => (mapNom.has(ch) ? mapNom.set(ch, mapNom.get(ch) + 1) : mapNom.set(ch, 1)));

console.log(mapNom);

// Exercici 4

let cognom = ['N', 'i', 'e', 't', 'o'];

cognom.elToUpperCase();

let nomCognom = nom.concat(" ").concat(cognom);

console.log(nomCognom);