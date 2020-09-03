const cwp = require("../src/index")
describe("Function string2array convert an string to an array", function() {
    test("should be a function", function(){
        expect(typeof cwp.string2array).toBe("function");
    });
    test("should return an right array", function(){
        let expected = ["A"];
        let obtained = cwp.string2array("A");
        expect(expected).toStrictEqual(obtained);

    });
});
