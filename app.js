// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre==""){
        alert("Por favor, Inserte un nombre");
    }else{
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
        actualizaLista();
    }
}

function actualizaLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo(){
    let listaResultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        listaResultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    listaResultado.innerHTML = `<li>🎉 ¡El amigo sorteado es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}





