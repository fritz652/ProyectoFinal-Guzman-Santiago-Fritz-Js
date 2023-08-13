//:::::::::::::BUSCADOR:::::::::::::::::::

//............Evento del buscador........

const nav = document.querySelector(".nav"),
searchIconID = document.querySelector("#searchIconID");

// asignacion  del evento                              //.....se puede resumir en:
searchIconID.addEventListener("click", mostrarAlerta); //.....searchIconID.addEventListener("click", ()=>{
// funcion dentro del evento                           //.......nav.classList.toggle("openSearch");
function mostrarAlerta(){                              //.....});
    nav.classList.toggle("openSearch");

    if(nav.classList.contains("openSearch")){
        return searchIconID.classList.replace("searchIcon", "clouseIcon");
    }
    searchIconID.classList.replace("clouseIcon", "searchIcon");
}

// aqui se agregara para el navegador responsive