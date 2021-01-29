
const answer = require("../src/index")
describe("partsSums",function() {
    test("Basic tests",function() {
        expect(iqTest("2 4 7 8 10")).toStrictEqual(3)
        expect(iqTest("1 2 2")).toStrictEqual(1)
    });
});
