function handlerInputEncrip() {
    let frase = document.getElementById('frase').value;
    let clavePosicion = parseInt(document.getElementById('clavePosicion').value);
    let div = document.getElementById("container-resultado")
    elemento = document.createElement('h3');
    elemento = div.appendChild(elemento);
    elemento.className = "texto-resultado-cifrado";
    elemento.innerHTML = claveEncriptarAscii(frase, clavePosicion);
    document.getElementById('frase').value = "";
    document.getElementById('clavePosicion').value = "";
}
function handlerInputDesencrip() {
    let frase = document.getElementById('frase').value;
    let clavePosicion = parseInt(document.getElementById('clavePosicion').value);
    let div = document.getElementById("container-resultado")
    elemento = document.createElement('h3');
    elemento.className = "texto-resultado-descifrado";
    elemento = div.appendChild(elemento);
    elemento.innerHTML = claveDesencriptarAscii(frase, clavePosicion);
    document.getElementById('frase').value = "";
    document.getElementById('clavePosicion').value = "";
}
function claveEncriptarAscii(frase, clavePosicion) {
    frase = frase.split("");
    //Por cada elemento de la frase, se determina el "numero" de la posicion en ASCII
    //y se le suma clavePosicion
    frase = frase.map(letra=>String.fromCharCode(letra.charCodeAt() + clavePosicion));
    return frase.join("");
}
function claveDesencriptarAscii(frase, clavePosicion) {
    frase = frase.split("");
    frase = frase.map(letra=>String.fromCharCode(letra.charCodeAt() - clavePosicion));
    return frase.join("");
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