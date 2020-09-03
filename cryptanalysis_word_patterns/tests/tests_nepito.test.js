const cwp = require("../src/index")

describe("Function string2setarray convert an string to an set array", function() {
    test("should be a function", function(){
        expect(typeof cwp.string2setarray).toBe("function");
    });
    test("should return an right array", function(){
        var expected = ["A"];
        var obtained = cwp.string2setarray("A");
        expect(expected).toStrictEqual(obtained);
        expected = ["A", "B"];
        obtained = cwp.string2setarray("AB");
        expect(expected).toStrictEqual(obtained);
        expected = ["A", "N"];
        obtained = cwp.string2setarray("ANA");
        expect(expected).toStrictEqual(obtained);
    });
});

describe("Should count how many times is each elements", function(){
    test("Should be a function count_each_element", function(){
        expect(typeof cwp.count_each_element).toBe("function");
    });
});