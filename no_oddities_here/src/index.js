function noOdds( values ){
    var salida = [];
    for (var i = 0; i < values.length; i++) {
      salida = append_pair(values[i], salida)
    }
    // Return all non-odd values
    return salida
}
  
function is_pair(number){
  if (number%2 == 0) {
    return true
  //  block of code to be executed if the condition is true
  } else {
    return false
  //  block of code to be executed if the condition is false
  }
}
  
function append_pair(number, arreglo){
  if (is_pair(number)){
    arreglo.push(number);
  } else if (number == undefined) {
    arreglo.push(0);
  }
  return arreglo
}

module.exports = {
  noOdds: noOdds,
  is_pair: is_pair,
  append_pair: append_pair
};