const sop = require("../src/index")

function test_is_a_function(funcion){
    test("Should be a function", function(){
        expect(typeof funcion).toBe("function")
    });
}

describe("Should be a function", function(){
    test_is_a_function(sop.partsSums);
});

describe("Should the function sum_elements_array return the sum", function(){
    test("", function(){
        var expected = 1;
        var obtained = sum_elements_array([1]);
        expect(obtained).toStrictEqual(expected);
    });
});