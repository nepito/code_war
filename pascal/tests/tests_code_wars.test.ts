const answer = require("../src/index");

describe( "Testing some inputs", function(){
    test( "should first row Pascal is [[1]]", function(){
      expected = [[1]];
      obtained = answer.pascal(1);
      expect(expected).toStrictEqual(obtained);
    });
});