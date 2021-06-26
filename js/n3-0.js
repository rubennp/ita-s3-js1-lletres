window.addEventListener('load', () => {
    let 
        nom = JSON.parse(sessionStorage.getItem('nom')).join(""),
        cognom = JSON.parse(sessionStorage.getItem('cognom')).join("");
        
    document.querySelector("body h1 span").innerHTML = `${nom} ${cognom}`;
});