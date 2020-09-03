function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2setarray( string ){
    var salida = string.split("");
    return salida
}

function array2set(){
    return ["A"]
}


module.exports = {
  wordPattern: wordPattern,
  string2setarray: string2setarray,
  array2set: array2set
};