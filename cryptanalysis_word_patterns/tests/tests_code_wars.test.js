const answer = require("../src/index")
describe("Example Tests", function() {
    test("should pass fixed tests", function() {
        var obtained = answer.wordPattern("hello");
        var expected = "0.1.2.2.3";
        expect(expected).toBe(obtained);
        obtained = answer.wordPattern("helLo");
        expected = "0.1.2.2.3";
        expect(expected).toBe(obtained);
        obtained = answer.wordPattern("Hippopotomonstrosesquippedaliophobia");
        expected = "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13";
        expect(expected).toBe(obtained);
    });
});