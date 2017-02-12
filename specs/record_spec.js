var assert = require( 'assert' );
var Record = require( '../record' );

describe( "Record", function(){

  var queenRecord = null;
  var bwetWetWetRecord = null;
  var now95Record = null;
  var ragnBoneRecord = null;

  beforeEach( function(){
    queenRecord = new Record( "Queen", "Bohemian Rapsody", 12.00 );
    wetWetWetRecord = new Record( "Wet Wet Wet", "Wishing i was lucky", 11.50);
    ragnBoneRecord = new Record( "Rag n Bone Man", "Human", 14.95);
  });

  it( "should have artist", function(){
    assert.equal( "Queen", queenRecord.artist );
  });

  it( "should have title", function(){
    assert.equal( "Wishing i was lucky", wetWetWetRecord.title );
  });

  it( "should have price", function(){
    assert.equal( 14.95, ragnBoneRecord.price );
  });

  

});