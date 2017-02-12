
//Part C -- Create a RecordCollector (or Customer) constructor who can buy and sell records.
var Customer = function( name, wallet ){
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
};

//Part C -- The RecordCollector should have cash that increase and decreases with buying and selling. 
Customer.prototype = {
  numberOfRecords: function(){
    return this.collection.length;
  },

  retCollection: function(){
    return this.collection;
  },

  buyRecord: function( record ){
    this.collection.push( record );
    this.wallet -= record.price;
  },

// Part C -- The RecordCollector shouldn't be able to buy a Record if he can't afford it.
  checkIfSufficientFunds: function(requestedAmount) {
    if(requestedAmount <= this.wallet) {
      return true; 
      }
    else
      { 
      return false;
      }
  }
};

module.exports = Customer;