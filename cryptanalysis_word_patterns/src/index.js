function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2array( string ){
    var salida = string.split("");
    return salida
}

module.exports = {
  wordPattern: wordPattern,
  string2array: string2array
};