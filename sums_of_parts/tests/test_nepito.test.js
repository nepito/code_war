const sop = require("../src/index")

describe("Should be a function", function(){
    test("Should be a function", function(){
        expect(typeof sop.partsSums).toBe("function")
    })
});
describe("Should the function sum_elements_array return the sum", function(){
    test("", function(){
        var expected = 1;
        var obtained = sum_elements_array([1]);
        expect(obtained).toStrictEqual(expected);
    });
});