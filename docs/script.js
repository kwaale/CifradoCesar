function handlerInputEncrip() {
    let frase = document.getElementById('frase').value;
    let clavePosicion = parseInt(document.getElementById('clavePosicion').value);
    let div = document.getElementById("container-resultado")
    elemento = document.createElement('h3');
    elemento = div.appendChild(elemento);
    elemento.className = "texto-resultado-cifrado";
    elemento.innerHTML = claveEncriptarAscii(frase, clavePosicion);
    setInterval(()=>{
        document.getElementById('frase').value = "";
        document.getElementById('clavePosicion').value = "";
    },3000);
}
function handlerInputDesencrip() {
    let frase = document.getElementById('frase1').value;
    let clavePosicion = parseInt(document.getElementById('clavePosicion1').value);
    let div = document.getElementById("container-resultado")
    elemento = document.createElement('h3');
    elemento.className = "texto-resultado-descifrado";
    elemento = div.appendChild(elemento);
    elemento.innerHTML = claveDesencriptarAscii(frase, clavePosicion);
    setInterval(()=>{
        document.getElementById('frase1').value = "";
        document.getElementById('clavePosicion1').value = "";
    },3000);
}
//NO ESTA EN USO, es para encriptar con abcedario
function claveEncriptar(frase, clavePosicion) {
    frase = frase.toUpperCase();
    let posiciones = [];
    let fraseCript = [];
    let abcedario = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(" ");
    abcedario.push(" ")
    for (let elemento of frase) {
        posiciones.push(abcedario.indexOf(elemento) + clavePosicion);
    }
    for (let posicion of posiciones) {
        if (posicion >= abcedario.length) fraseCript.push(abcedario[posicion - abcedario.length]);
        else fraseCript.push(abcedario[posicion]);
    }
    return fraseCript.join("");
}
//NO ESTA EN USO, es para desencriptar con abcedario
function claveDesencriptar(frase, clavePosicion) {
    frase = frase.toUpperCase();
    let posiciones = [];
    let fraseCript = [];
    let abcedario = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(" ");
    abcedario.push(" ");
    for (let elemento of frase) {
        posiciones.push(abcedario.indexOf(elemento) - clavePosicion);
    }
    for (let posicion of posiciones) {
        if (posicion < 0) fraseCript.push(abcedario[abcedario.length + posicion]);
        else fraseCript.push(abcedario[posicion]);
    }
    return fraseCript.join("");
}
function claveEncriptarAscii(frase, clavePosicion) {
    frase = frase;
    let posiciones = [];
    let fraseCript = [];
    for (let elemento of frase) {
        posiciones.push(elemento.charCodeAt() + clavePosicion);
    }
    for (let posicion of posiciones) {
        fraseCript.push(String.fromCharCode(posicion));
    }
    return fraseCript.join("");
}
function claveDesencriptarAscii(frase, clavePosicion) {
    frase = frase;
    let posiciones = [];
    let fraseCript = [];

    for (let elemento of frase) {
        posiciones.push(elemento.charCodeAt() - clavePosicion);
    }
    for (let posicion of posiciones) {
        fraseCript.push(String.fromCharCode(posicion));
    }
    return fraseCript.join("");
}