const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected')
});

const imageSchema = new mongoose.Schema({
  product_id: Number,
  images: [String],
  detailImages: [String]

});

let Images = mongoose.model('Images', imageSchema)

let read = (callback) => {
  Images.find({}).exec((err,result) => callback.send(result));

}

module.exports = mongoose.model('Images', imageSchema);
module.exports.read = read;
