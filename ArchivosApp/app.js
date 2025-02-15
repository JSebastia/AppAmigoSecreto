// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function agregarAmigo(){

    let entradaTexto = document.getElementById("amigo").value;

    if(entradaTexto === ""){

        alert("¡Opps!...Por favor, inserte un nombre.");
    }else{
        //Se agrega al final del array un elemento.
        arrayAmigos.push(entradaTexto);

        limpiarInput();
        actualizarListaAmigos();
    } 
    return;
}

function actualizarListaAmigos(){
    //Se obtiene la cantidad de elementos del array.
    let tamanioArrayAmigos = arrayAmigos.length;
    //Se obtiene el elemento ul html.
    let listaAmigos = limpiarListaAmigos();
    //Se iteran todos los elementos del array.
    for (let iterador = 0; iterador < tamanioArrayAmigos; iterador++){
        //Se crea un elemento li.
        let elementoLi = document.createElement("li");
        elementoLi.innerHTML = arrayAmigos[iterador];
        //Se agrega el elemento li en la lista.
        listaAmigos.appendChild(elementoLi);
    } 
    return;
}

function sortearAmigo(){

    if(arrayAmigos == ""){

        alert("¡No hay amigos para sortear!");
    }else{
        //Se genera un numero aleatorio entre 0 y la longitud del array.
        let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);

        console.log(indiceAleatorio);

        let amigo = arrayAmigos[indiceAleatorio];
        let textoResultado = `El amigo sorteado es: ${amigo}`;
        
        let elementoResultado = document.querySelector("#resultado");
        elementoResultado.innerHTML = textoResultado;

        limpiarListaAmigos();
    }

    return;
}

function limpiarListaAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    return listaAmigos;
}

function limpiarInput(){

    document.getElementById("amigo").value = "";

    return;
}