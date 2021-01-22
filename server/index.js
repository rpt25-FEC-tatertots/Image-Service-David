const express = require('express');
// var bodyParser = require('body-parser');
let app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req, res) {

})

app.get('/', function (req, res) {
// res.send('yay')

});

app.listen(6003, () => {
  console.log('listening on port 6003!');
});