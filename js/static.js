/* Función para agregar "Header" */
document.addEventListener("DOMContentLoaded", function(){
    const headercontainer = document.querySelector('#header-container');

    fetch("../pages/header.html")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("La respuesta no fue la correcta")
        }
        return respuesta.text();
    })
    
    
    .then(datos => {
        headercontainer.innerHTML = datos;
    })
})

/* Función para agregar "Footer" */
document.addEventListener("DOMContentLoaded", function(){
    const footercontainer = document.querySelector('#footer-container');

    fetch("../pages/footer.html")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("La respuesta no fue la correcta")
        }
        return respuesta.text();
    })
    
    
    .then(datos => {
        footercontainer.innerHTML = datos;
    })
})

/* Función para agregar "About" */
document.addEventListener("DOMContentLoaded", function(){
    const aboutcontainer = document.querySelector('#about-container');

    fetch("../pages/about.html")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("La respuesta no fue la correcta")
        }
        return respuesta.text();
    })
    
    
    .then(datos => {
        aboutcontainer.innerHTML = datos;
    })
})