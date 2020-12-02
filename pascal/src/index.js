function pascal( deep ){
    var salida = [[1]];
    if(deep > 1){
      var next_row;
      for (var i = 1; i < deep; i++) {
        next_row = calculate_next_row(salida[i - 1]);
        salida.push(next_row);
      }
    }
    // Return all non-odd values
    return salida
}
  
function internals_row( array ){
  var salida = [];
  var i;
  for(i=1; i < array.length; i++){
    salida.push(array[i-1] + array[i])
  }
  return salida

}

function make_row( internals_row ){
  var salida = [1, ...internals_row, 1]
  return salida
}

function calculate_next_row( present_row ){
  const interno = internals_row(present_row)
  const salida = make_row(interno);
  return salida
}

module.exports = {
  pascal : pascal,
  internals_row : internals_row,
  make_row : make_row,
  calculate_next_row : calculate_next_row,
};