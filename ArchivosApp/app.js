// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function agregarAmigo(){

    let entradaTexto = document.getElementById("amigo").value;

    if(entradaTexto === ""){

        alert("¡Opps!...Por favor, inserte un nombre.");
    }else{

        arrayAmigos.push(entradaTexto);
        
        limpiarInput();
        actualizarListaAmigos();
    }   
}

function actualizarListaAmigos(){

    let tamanioArrayAmigos = arrayAmigos.length;
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let iterador = 0; iterador < tamanioArrayAmigos; iterador++){

        let elementoLi = document.createElement("li");
        elementoLi.innerHTML = arrayAmigos[iterador];

        listaAmigos.appendChild(elementoLi);
    } 
}

function limpiarInput(){

    document.getElementById("amigo").value = "";
}