function pascal( deep ){
    var salida = [[1]];
    if (deep ==2) {
      salida.push([1, 1]);
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

function next_row( present_row ){
  const interno = internals_row(present_row)
  const salida = make_row(interno);
  return salida
}

module.exports = {
  pascal : pascal,
  internals_row : internals_row,
  make_row : make_row,
  next_row : next_row,
};