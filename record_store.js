//Part A - Create a Record Store that has a Name, City and an Inventory.
var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.records = [];

  //Part A - Give the Record Store a Balance.
  this.balance = balance;

  this.customers = [];
};

RecordStore.prototype = {

//Part A - Add some Records to the Store's Inventory
  // Add a Record
  addRecord: function( record ){
    this.records.push( record );
  },
  //Return the number of records
  numberOfRecords: function(){
    return this.records.length;
  },

//Part B - Create a method that lists the inventory.

  //Get a List of Inventory
  retInvList: function(){
    return this.records;
  },

  //Get a list of Titles
  retInvListTitles: function(){
   return this.records.map(function( record ){
    return record.title;
  });
 },

 // Return the index of a given title
 retIndex: function( title ){
  var foundRecord = this.records.find( function( record ){
    var found = record.title === title;
    return found;
  });
  return this.records.indexOf(foundRecord);
},

//Part B -- Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.
// Sell a record
sellRecord: function( title ){
  for ( var record of this.records ){
    if ( title === record.title){
      this.records.splice((this.retIndex(title)), 1);
      this.balance += record.price;
    }
  }
},

//Part B -- Create a method that reports the finnancial situation of the Store. Balance and value of inventory.
//Get the Inventory Value
inventoryValue: function(){
  var prices = this.records.map( function( record ){
    return record.price;
  });
  return prices.reduce( function( a, b ){
    return a + b}, 0);
},

//Get Finacial Status
reportFinance: function(){
  var financeString = 
  "Inv Value: £" + (this.inventoryValue().toFixed(2)).toString() + ", " + "Bank Balance: £" + (this.balance.toFixed(2)).toString();
  return financeString; 
},

//Part c -- Create a RecordCollector (or Customer) constructor who can buy and sell records.

  // Add a customer
  addCustomer: function( customer ){
    this.customers.push(customer);
  },

  // Return the number of customers
  countCustomers: function(){
    return this.customers.length;
  },

  // Get the customer
  getCustomers: function(){
    return this.customers;
  },
//Customer buys a record
sellRecordToCustomer: function(record, customer ){
  this.sellRecord( record.title );
  customer.buyRecord(record);
}
};

module.exports = RecordStore;