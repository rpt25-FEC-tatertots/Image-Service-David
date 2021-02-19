const mongoose = require('mongoose');
const Images = require('../database/index');
const faker = require('faker');

mongoose.connect('mongodb://localhost/FEC');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('seeder connected')
});

let imageArray = []

let newObj = {};

for(let i = 1; i < 101; i++) {
  newObj = {}
  newObj.product_id = i
  newObj.mainImages = []
  newObj.thumbnailImages = []
  newObj.detailImages = []

  for (let j = 1; j < 6; j++) {
    newObj.mainImages.push(`https://rpt25.s3-us-west-1.amazonaws.com/main_images/${i}/${j}.jpg`)
    newObj.thumbnailImages.push(`https://rpt25.s3-us-west-1.amazonaws.com/thumbnail_images/${i}/${j}.jpg`)
    if (j === 1) {
      newObj.detailImages.push(`https://rpt25.s3-us-west-1.amazonaws.com/detail_images/${i}/${j}.mp4`)
    } else {
      newObj.detailImages.push(`https://rpt25.s3-us-west-1.amazonaws.com/detail_images/${i}/${j}.jpg`)
    }
  }

  let newImage = new Images({
    product_id: newObj.product_id,
    mainImages: newObj.mainImages,
    thumbnailImages:newObj.thumbnailImages,
    detailImages: newObj.detailImages,
  })

  imageArray.push(newImage);

}

let exit = () => {
  mongoose.disconnect();
  console.log('MONGOOSE DISCONNECT!')
}

Images.insertMany(imageArray, (err, docs) => {
  if (err) {
    return console.error(err)
  } else {
    console.log(docs + "images saved")
    exit()
  }
})
