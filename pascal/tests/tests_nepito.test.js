const answer = require("../src/index");

describe("Should do nothing", function(){
  function assert_pascal_from_deep(deep, expected) {
    obtained = answer.pascal(deep);
    expect(expected).toStrictEqual(obtained);
  }
  test("should first row Pascal is [[1]]", function () {
    expected = [[1], [1, 1]];
    assert_pascal_from_deep(2, expected)
  });
});

describe("Test internals_row", function(){
  test("should return the firt result", function(){
    expected = [2];
    obtained = answer.internals_row([1, 1])
    expect(expected).toStrictEqual(obtained);
  });
});