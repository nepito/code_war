function noOdds( values ){
    var salida = [];
    var i;
    for (i = 0; i < values.length; i++) {
      salida = append_pair(values[i], salida)
    }
    // Return all non-odd values
    return salida
}
  
function is_pair(number){
  var salida;
  if (number%2 == 0) {
    return true
  //  block of code to be executed if the condition is true
  } else {
    return false
  //  block of code to be executed if the condition is false
  }
}
  
function append_pair(number, array){
  if (is_pair(number)){
    array = array.push(number);
  }
  return array
}