var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');
var Customer = require('../customer');

describe( "Record Store", function(){
  //var definitions

  //stock
  var matzMuzik = null;
  var queenRecord = null;
  var wetWetWetRecord = null;
  var ragnBoneRecord = null;
  //Customer
  var simon = null;

  //Startup Vars n Settings
  beforeEach( function(){
    matzMuzik = new RecordStore("Matz Muzik", "Edinburgh", 1200);

    queenRecord = new Record( "Queen", "Bohemian Rapsody", 12.00 );
    wetWetWetRecord = new Record( "Wet Wet Wet", "Wishing i was lucky", 11.50);
    ragnBoneRecord = new Record( "Rag n Bone Man", "Human", 14.95);

    //create a customer
    simon = new Customer("Simon Douglas", 110.00);

    // add some stock
    matzMuzik.addRecord( queenRecord );
    matzMuzik.addRecord( wetWetWetRecord );
    matzMuzik.addRecord( ragnBoneRecord );

    // add customer to shop
     matzMuzik.addCustomer(simon);

  });



  it( "should have store name", function(){
    assert.equal( "Matz Muzik", matzMuzik.name );
  });

  it( "should be assigned to a city", function(){
    assert.equal("Edinburgh", matzMuzik.city );
  });

  it( "should have balance", function(){
    assert.equal( 1200, matzMuzik.balance);
  });

  it( "should have no records if empty store", function(){
    zsoltsMuzik = new RecordStore("Zsolts Muzik", "Edinburgh", 1200);
    assert.equal( 0, zsoltsMuzik.numberOfRecords());
  });

  it("should add records", function(){

    assert.equal( 3, matzMuzik.numberOfRecords());
  });

  it("should list inventory", function(){
    assert.deepEqual( [queenRecord, wetWetWetRecord, ragnBoneRecord ], matzMuzik.retInvList() );
  });

  it("should list inventory titles", function(){
    assert.deepEqual( ["Bohemian Rapsody", "Wishing i was lucky", "Human", ], matzMuzik.retInvListTitles() );
  });

  it( "should return the index of record by title", function(){
    assert.equal( 0, matzMuzik.retIndex("Bohemian Rapsody") );
  });

    it( "should return the index of record by title again to prove not a fluke", function(){
    assert.equal( 2, matzMuzik.retIndex("Human") );
  });

  it( "should sell a record and have 2 records left", function(){
    matzMuzik.sellRecord("Wishing i was lucky");
    assert.equal( 2, matzMuzik.numberOfRecords() );
  });

  it( "should confirm that sold record is removed from inventory", function(){
    matzMuzik.sellRecord("Wishing i was lucky");
    assert.deepEqual( [queenRecord, ragnBoneRecord], matzMuzik.retInvList() );
  });

  it( "should increase store balance if sold stock", function(){
    matzMuzik.sellRecord("Wishing i was lucky");
    assert.equal( 1211.50, matzMuzik.balance);
  });

  it( "should report value of inventory", function(){
    assert.equal( 38.45, matzMuzik.inventoryValue() );
  });

  it("should report the financials of the store", function(){
    matzMuzik.sellRecord("Wishing i was lucky");
    assert.equal("Inv Value: £26.95, Bank Balance: £1211.50", matzMuzik.reportFinance() );
  });

  it("should allow customer to enter store", function(){
    assert.equal( 1, matzMuzik.countCustomers());
  });

  it( "should get customers", function(){
    assert.deepEqual([simon], matzMuzik.getCustomers());
  });
  
  it( "should be able to sell record to customer", function(){
    matzMuzik.sellRecordToCustomer( queenRecord, simon );
    assert.equal( 2, matzMuzik.numberOfRecords() );
    assert.equal( 1, simon.numberOfRecords() );
  });

  it( "should sell correct record to customer", function(){
    matzMuzik.sellRecordToCustomer( ragnBoneRecord, simon );
    assert.deepEqual( [ragnBoneRecord], simon.collection );
  });


});