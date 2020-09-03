const cwp = require("../src/index")
describe("Function string2array convert an string to an array", function() {
    test("should be a function", function(){
        expect(typeof cwp.string2array).toBe("function");
    });
});
