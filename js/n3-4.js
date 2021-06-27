let nom = JSON.parse(sessionStorage.getItem('nom'));
let cognom = JSON.parse(sessionStorage.getItem('cognom'));

let nomCognom = nom.concat(" ").concat(cognom);
console.warn(`nomCognom: ${typeof(nomCognom)} (${nomCognom.length})`);
nomCognom.forEach(e => console.log(`"${e}"`));
console.warn("∎");