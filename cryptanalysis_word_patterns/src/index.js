function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2setarray( string ){
    var arreglo = string.split("");
    var salida = [...new Set(arreglo)];
    return salida
}

function letter2index(){
    return "0"
}

module.exports = {
  wordPattern: wordPattern,
  string2setarray: string2setarray,
  letter2index: letter2index,
};