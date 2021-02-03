const express = require('express');
// var bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();


// app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))

app.use( '/:product_id', express.static(__dirname + '/../client/dist'));

app.get('/images/mainImages/:productID', (req, res) => {

  db.read(req.params.productID, 'mainImages')
    .then(images=> {
      res.send(images)
    })
    .catch(err =>res.status(404))
})

app.get('/images/thumbnailImages/:productID', function (req, res) {
  db.read(req.params.productID, 'thumbnailImages')
  .then(images=> {
    res.send(images)
  })
  .catch(err =>res.status(404))
})

app.get('/images/detailImages/:productID', function (req, res) {
  db.read(req.params.productID, 'detailImages')
  .then(images=> {
    res.send(images)
  })
  .catch(err => res.status(404))

});


module.exports = app;

// app.listen(6003, () => {
//   console.log('listening on port 6003!');
// });