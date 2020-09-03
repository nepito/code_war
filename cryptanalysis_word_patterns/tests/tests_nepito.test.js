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

describe("Should count how many times is each element", function(){
    test("Should be a function count_each_element", function(){
        expect(typeof cwp.count_each_element).toBe("function");
    });
    test("Shoul count how many times is each element", function(){
        var expected = [1];
        var obtained = cwp.count_each_element(["A"]);
        expect(expected).toStrictEqual(obtained);
        var expected = [1,1];
        var obtained = cwp.count_each_element(["A", "B"]);
        expect(expected).toStrictEqual(obtained);
        var expected = [2];
        var obtained = cwp.count_each_element(["A", "A"]);
        expect(expected).toStrictEqual(obtained);
    });
});

describe("Should count how many times is an element", function(){
    test("Should be a function count_element", function(){
        expect(typeof cwp.count_element).toBe("function");
    });
    test("Shoul count how many times is each element", function(){
        var expected = 1;
        var obtained = cwp.count_element(["A"],"A");
        expect(expected).toStrictEqual(obtained);
        var expected = 2;
        var obtained = cwp.count_element(["A", "A"],"A");
        expect(expected).toStrictEqual(obtained);
    });
});