describe( "Testing some inputs", function(){
    it( "should return [0] for [0,1]", function(){
      Test.assertSimilar( noOdds( [0,1] ), [0] )
    });
    it( "should return [0,2] for [0,1,2,3]", function(){
      Test.assertSimilar( noOdds( [0,1,2,3] ), [0,2] )
    });
});