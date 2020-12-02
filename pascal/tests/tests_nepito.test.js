const answer = require("../src/index");

describe("Should do nothing", function () {
  function assert_pascal_from_deep(deep, expected) {
    obtained = answer.pascal(deep);
    expect(expected).toStrictEqual(obtained);
  }
  test("should first row Pascal is [[1]]", function () {
    expected = [[1], [1, 1]];
    assert_pascal_from_deep(2, expected)
  });
});

describe("Test internals_row", function () {
  function assess_internals_row(entrada, expected) {
    obtained = answer.internals_row(entrada)
    expect(expected).toStrictEqual(obtained);
  }

  test("should return the firt result", function () {
    expected = [2];
    assess_internals_row([1, 1], expected)
  });
  test("should return the second result", function () {
    expected = [3, 3];
    assess_internals_row([1, 2, 1], expected)
  });
  test("should return the second result", function () {
    expected = [4, 6, 4];
    assess_internals_row([1, 3, 3, 1], expected)
  });
});