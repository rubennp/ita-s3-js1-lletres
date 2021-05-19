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

// Nivell 2

const expReg = /(\b[^\s]+(-[^\s]+)*@(\b[^\s]+(-[^\s]+)*)\.([A-z]+)\b)(?!.*\1)/g;

let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

let mails = str.match(expReg);

console.log(mails);
