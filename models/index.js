const Traveler = require('./Traveler');
const Location = require('./Location');
const Trips = require('./Trips');

// // A traveler can have many locations
// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// // TODO: Add a comment describing the functionality of this statement
// // make the Reader and LibraryCard available outside this file
// module.exports = { Reader, LibraryCard };

module.exports = {Traveler, Location, Trips}
