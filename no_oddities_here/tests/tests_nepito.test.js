const answer = require("../src/index");

describe( "Testing some inputs", function(){
    it( "should return true for 2", function(){
      expect(answer.is_pair(2)).toStrictEqual(true);
    });
    it( "should return false for 1", function(){
      expect(answer.is_pair(1)).toStrictEqual(false);
    });
});