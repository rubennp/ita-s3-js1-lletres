let nom = JSON.parse(sessionStorage.getItem('nom'));

console.warn(`Partim del nom ${nom.join('')}`);
nom.forEach(ch => {
    if (/[AÀÁEÈÉIÍOÒÓUÚ]/i.test(ch)) console.log(`He trobat la VOCAL: ${ch}`);
    else if (/[0-9]/.test(ch)) console.log(`Els noms de persones no contenen el número: ${ch}`);
    else if (ch === " ") console.log("-- ESPAI --");
    else console.log(`He trobat la CONSONANT: ${ch}`);
});
console.warn("∎");