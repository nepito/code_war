const answer = require("../src/index");

describe("Should do nothing", function () {
  function assert_pascal_from_deep(deep, expected) {
    obtained = answer.pascal(deep);
    expect(expected).toStrictEqual(obtained);
  }
  test("should second row Pascal is [[1]]", function () {
    expected = [[1], [1, 1]];
    assert_pascal_from_deep(2, expected)
  });
  test.skip("should third row Pascal is [[1], [1, 1], [1, 2, 1]]", function () {
    expected = [[1], [1, 1], [1, 2, 1]];
    assert_pascal_from_deep(3, expected)
  });
});

describe("Test internals_row", function () {
  function assess_internals_row(entrada, expected) {
    obtained = answer.internals_row(entrada)
    expect(expected).toStrictEqual(obtained);
  }

  test("should return the firt result", function () {
    expected = [];
    assess_internals_row([1], expected)
  });
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

describe("Test make_row", function(){
  test("should make_row([2]) return [1, 2, 1]", function(){
    expected = [1, 2, 1];
    obtained = answer.make_row([2]);
    expect(expected).toStrictEqual(obtained)
  });
  test("should make_row([3, 3]) return [1, 3, 3, 1]", function(){
    expected = [1, 3, 3, 1];
    obtained = answer.make_row([3, 3]);
    expect(expected).toStrictEqual(obtained)
  });
  test("should make_row([]) return [1, 1]", function(){
    expected = [1, 1];
    obtained = answer.make_row([]);
    expect(expected).toStrictEqual(obtained)
  });
});

describe("Test `next_row`", function(){
  test("Should `next_row([1])` return [2, 2]", function(){
    expected = [1, 1];
    obtained = answer.next_row([1]);
    expect(expected).toStrictEqual(obtained)
  });
});