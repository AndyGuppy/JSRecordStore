// Part A - Create a Record Object that has Artist, Title and Price
var Record = function( artist, title, price ){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

// Make it avaliable
module.exports = Record;