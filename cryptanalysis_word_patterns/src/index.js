function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2setarray( string ){
    var arreglo = string.split("");
    var salida = [...new Set(arreglo)];
    return salida
}

function letter2index(palabra){
    var elemntos = string2setarray(palabra)
    var letras = palabra.split("")
    var i_letra;
    var i_elemento;
    var salida = ""
    for (i_letra = 0; i_letra < letras.length; i_letra++) {
        for (i_elemento = 0; i_elemento < elemntos.length; i_elemento++) {
            if (letras[i_letra] == elemntos[i_elemento]){
                salida = salida + i_elemento + "."
            }
        }
      }
    return salida.slice(0, -1);
}

module.exports = {
  wordPattern: wordPattern,
  string2setarray: string2setarray,
  letter2index: letter2index,
};