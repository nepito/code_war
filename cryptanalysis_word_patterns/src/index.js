function wordPattern(){
    var salida = "0.1.2.2.3"
    return salida
}

function string2setarray( string ){
    var arreglo = string.split("");
    var salida = [...new Set(arreglo)];
    return salida
}

function count_each_element( arreglo ){
    var i;
    var cuenta = [];
    for (i = 0; i < arreglo.length; i++) {
        cuenta.push(1);
    }
    return cuenta
};


module.exports = {
  wordPattern: wordPattern,
  string2setarray: string2setarray,
  count_each_element:count_each_element,
};