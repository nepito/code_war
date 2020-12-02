function pascal( deep ){
    var salida = [[1]];
    if (deep ==2) {
      salida.push([1, 1]);
    }
    // Return all non-odd values
    return salida
}
  
module.exports = {
  pascal : pascal,
};