const answer = require("../src/index");

describe( "Testing the function is_pair", function(){
    it( "should return true for 2", function(){
      expect(answer.is_pair(2)).toStrictEqual(true);
    });
    it( "should return false for 1", function(){
      expect(answer.is_pair(1)).toStrictEqual(false);
    });
});

describe( "Testing the function append_pair", function(){
    it( "should return [2] for (2,[])", function(){
      expect(answer.append_pair(2, [])).toStrictEqual([2]);
    });
    it( "should return [] for (1,[])", function(){
      expect(answer.append_pair(1, [])).toStrictEqual([]);
    });
    it( "should return [1] for (1,[1])", function(){
      expect(answer.append_pair(1, [1])).toStrictEqual([1]);
    });
    it( "should return [1,8] for (8,[1])", function(){
      expect(answer.append_pair(8, [1])).toStrictEqual([1, 8]);
    });
    it( "should return [1,0] for (undefined,[1])", function(){
      expect(answer.append_pair(undefined, [1])).toStrictEqual([1, 0]);
    });
});