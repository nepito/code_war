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

describe("Function letter2index change the letter to an index", function() {
    test("should be a function", function(){
        expect(typeof cwp.letter2index).toBe("function");
    });
    test("should return an right string", function(){
        var expected = "0"
        var obtained = cwp.letter2index("A")
        expect(expected).toStrictEqual(obtained)
    });
});

