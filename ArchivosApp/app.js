// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function agregarAmigo(){

    let entradaTexto = document.getElementById("amigo").value;

    if(entradaTexto === ""){

        alert("¡Opps!...Por favor, inserte un nombre.");
    }else{

        listaAmigos.push(entradaTexto);
        limpiarInput();
    }   
}

function actualizarListaAmigos(){

}

function limpiarInput(){

    document.getElementById("amigo").value = "";
}