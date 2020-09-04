function partsSums(){};

function sum_elements_array(arreglo){
    var i_elements;
    var sum_elements = 0;
    for (i_elements=0; i_elements < arreglo.length; i_elements++){
        sum_elements += arreglo[i_elements]
    }
    return sum_elements;
};

module.exports = {
    partsSums: partsSums,
    sum_elements_array:sum_elements_array,
};