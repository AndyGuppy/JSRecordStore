
var Customer = require( '../customer' );
var Record = require( '../record' );
var assert = require( 'assert' );

describe( "Customer", function(){

  //Records
  var queenRecord = null;
  var wetWetWetRecord = null;
  var ragnBoneRecord = null;
  //Customer
  var simon = null;

  beforeEach( function(){

      // Create Records
    queenRecord = new Record( "Queen", "Bohemian Rapsody", 12.00 );
    wetWetWetRecord = new Record( "Wet Wet Wet", "Wishing i was lucky", 11.50);
    ragnBoneRecord = new Record( "Rag n Bone Man", "Human", 14.95);

      //create a customer
    simon = new Customer("Simon Douglas", 110.00);

  });

  it( "customer should have a name", function(){
    assert.equal( "Simon Douglas", simon.name );
  });

  it( "customer should have a wallet", function(){
    assert.equal( 110.00, simon.wallet );
  });

  it( "should start with no records", function(){
    assert.equal( 0, simon.numberOfRecords() );
  });

  it( "should be able to buy record", function(){
    simon.buyRecord(wetWetWetRecord);
    assert.equal( 1, simon.numberOfRecords() );
  });

  it( "should buy the correct record", function(){
    simon.buyRecord(ragnBoneRecord);
    assert.deepEqual([ragnBoneRecord], simon.retCollection());
  });

  it( "Balance should reduce when Record is bought", function(){
    simon.buyRecord(wetWetWetRecord);
    assert.equal( 98.50, simon.wallet );
  });

  it( "Can only buy if sufficient funds -- insufficient test", function(){
    beth = new Customer("Bethany Fraser", 9.00);
    assert.equal( false, beth.checkIfSufficientFunds(wetWetWetRecord.price));
  });

    it( "Can only buy if sufficient funds -- sufficient test", function(){

    assert.equal( true,     simon.checkIfSufficientFunds(wetWetWetRecord.price));
  });
});