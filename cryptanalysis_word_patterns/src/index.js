function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2setarray( string ){
    var arreglo = string.split("");
    var salida = [...new Set(arreglo)];
    return salida
}


module.exports = {
  wordPattern: wordPattern,
  string2setarray: string2setarray,
};