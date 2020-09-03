const cwp = require("../src/index")
describe("Function string2array convert an string to an array", function() {
    test("should be a function", function(){
        expect(typeof cwp.string2array).toBe("function");
    });
    test("should return an right array", function(){
        var expected = ["A"];
        var obtained = cwp.string2array("A");
        expect(expected).toStrictEqual(obtained);
        expected = ["B"];
        obtained = cwp.string2array("B");
        expect(expected).toStrictEqual(obtained);

    });
});
