const cwp = require("../src/index")
describe("Function string2array convert an string to an array", function() {
    test("should be a function", function(){
        expect(typeof cwp.string2array).toBe("function");
    });
    test("should return an array", function(){
        let expected = "Array";
        let outout = cwp.string2array("hello");
        let obtained = typeof(outout);
        expect(expected).toBe(obtained);

    });
});
