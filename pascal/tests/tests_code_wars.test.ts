const answer = require("../src/index");

describe("Testing some inputs", function () {
  function assert_pascal_from_deep(deep, expected) {
    obtained = answer.pascal(deep);
    expect(expected).toStrictEqual(obtained);
  }

  test("should first row Pascal is [[1]]", function () {
    expected = [[1]];
    assert_pascal_from_deep(1, expected)
  });
  test.skip("should first five rows Pascal are [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]", function () {
    expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    assert_pascal_from_deep(2, expected)
  });
});