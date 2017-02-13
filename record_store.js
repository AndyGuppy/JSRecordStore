var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
  this.customers = [];
};

RecordStore.prototype = {
  //Return the number of records
  numberOfRecords: function(){
    return this.records.length;
  },

  // Add a Record
  addRecord: function( record ){
    this.records.push( record );
  },
  
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

// Sell a record
sellRecord: function( title ){
  for ( var record of this.records ){
    if ( title === record.title){
      this.records.splice((this.retIndex(title)), 1);
      this.balance += record.price;
    }
  }
},

//Customer buys a record
sellRecordToCustomer: function(record, customer ){
  this.sellRecord( record.title );
  customer.buyRecord(record);
},

//Get the Inventory Value
inventoryValue: function(){
  var prices = this.records.map( function( record ){
    return record.price;
  });
  return prices.reduce( function( a, b ){
    return a + b}, 0);
},


reportFinance: function(){
  var financialsString = 
  "Inv Value: £" + (this.inventoryValue().toFixed(2)).toString() + ", " + "Bank Balance: £" + (this.balance.toFixed(2)).toString();
  return financialsString; 
}

};

module.exports = RecordStore;