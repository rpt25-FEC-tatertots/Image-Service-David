const mongoose = require('mongoose');
const Images = require('../database/index');
const faker = require('faker');

mongoose.connect('mongodb://localhost/images');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('seeder connected')
});

let imageArray = []
for(let i = 1; i < 101; i++) {

  let newImage = new Images({
    product_id: i,
    image: [faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100)],
    detailImages: [faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100), faker.image.imageUrl(100, 100)]
  })

  imageArray.push(newImage);

}

function exit() {
  mongoose.disconnect();
  console.log('MONGOOSE DISCONNECT!')
}

Images.insertMany(imageArray, (err, docs) => {
  if (err) {
    return console.error(err)
  } else {
    console.log(docs + "images saved")
    exit()
    // mongoose.disconnect()
  }
})
