const sop = require("../src/index")

function test_is_a_function(funcion){
    test("Should be a function" + funcion, function(){
        expect(typeof funcion).toBe("function")
    });
}

describe("Should be a function", function(){
    test_is_a_function(sop.partsSums);
});

describe("Should the function sum_elements_array return the sum", function(){
    test_is_a_function(sop.sum_elements_array);
    function test_sum_elements_array(expected, arreglo){
        let obtained = sop.sum_elements_array(arreglo);
        expect(obtained).toStrictEqual(expected);
    };
    test("", function(){
        test_sum_elements_array(1, [1]);
        test_sum_elements_array(2, [2]);
        test_sum_elements_array(3, [1, 2]);
        test_sum_elements_array(6, [1, 2, 3, 0]);
    });
});