describe("Should the function sum_elements_array return the sum", function(){
    test("", function(){
        var expected = 1;
        var obtained = sum_elements_array([1]);
        expect(obtained).toStrictEqual(expected);
    });

});