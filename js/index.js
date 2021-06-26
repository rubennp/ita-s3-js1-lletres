window.addEventListener('load', () => {
    let 
        nom = JSON.parse(sessionStorage.getItem('nom')) || "",
        cognom = JSON.parse(sessionStorage.getItem('cognom')) || "";

    if (nom !== "" && cognom !== "") {
        nom = nom.join("");
        cognom = cognom.join("");
        
        document.getElementById("alert").innerHTML = 
        `Sembla que ja has estat per aquí ${nom} ${cognom}. <br/>Pots canviar i/o guardar per continuar.`;
    }

    document.getElementById("fNom").value = nom;
    document.getElementById("fCognom").value = cognom;
});

// canvia a majúscula entrada inputs
document.querySelectorAll("input[type='text']").forEach(el => el.addEventListener('input', () => el.value = el.value.toUpperCase()));

const saveNomCognom = () => {
    sessionStorage.setItem('nom', JSON.stringify(document.getElementById("fNom").value.split("")));
    sessionStorage.setItem('cognom', JSON.stringify(document.getElementById("fCognom").value.split("")));

    return true;
};