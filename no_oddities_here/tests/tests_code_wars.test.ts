const answer = require("../src/index");

describe( "Testing some inputs", function(){
    it( "should return [0] for [0,1]", function(){
      expect(answer.noOdds([0,1])).toStrictEqual([0]);
    });
    it( "should return [0, 2] for [0,1,2,3]", function(){
      expect(answer.noOdds([0,1,2,3])).toStrictEqual([0,2]);
    });
});