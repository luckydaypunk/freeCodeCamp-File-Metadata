// server.js
// where your node app starts

// init project
const express = require('express');
const multer  = require('multer')
const app = express();
const upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use("/upload", upload.single("userFile"));
app.post("/upload", function (req, res) {
  res.end(JSON.stringify({ "name": req.file.originalname,
                      "size": req.file.size }));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
