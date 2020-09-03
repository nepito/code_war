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

describe("Function array2set convert an array to an set", function() {
    test("should be a function", function(){
        expect(typeof cwp.array2set).toBe("function");
    });
    test("should return an right array", function(){
        var expected = ["A"];
        var obtained = cwp.array2set(["A"]);
        expect(expected).toStrictEqual(obtained);
        expected = ["B"];
        obtained = cwp.array2set(["B"]);
        expect(expected).toStrictEqual(obtained);
        expected = ["A", "N"];
        obtained = cwp.array2set(["A", "N", "A"]);
        expect(expected).toStrictEqual(obtained);
    });
});