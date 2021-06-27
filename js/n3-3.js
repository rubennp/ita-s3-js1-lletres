let nom = JSON.parse(sessionStorage.getItem('nom'));

let mapNom = new Map();

nom.forEach(ch => (mapNom.has(ch) ? mapNom.set(ch, mapNom.get(ch) + 1) : mapNom.set(ch, 1)));

console.warn(`mapNom: ${mapNom}`);
mapNom.forEach((v, k) => console.log(`"${k}" => ${v}`));

console.warn("∎");