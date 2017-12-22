const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cards');

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("connection with database is open!");
});

let cardSchema = mongoose.Schema({
  question: String,
  answer: String
});

let Card = mongoose.model("Card", cardSchema);

// var test = new Card({question:'what color is the sky?', answer:'blue'});

// test.save((err, card) => {
// 	if ( !err ) {
// 		console.log('card is now saved.');
// 	}
// });

module.exports.db = db;
module.exports.Card = Card;