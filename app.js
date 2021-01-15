const express = require('express');
const path = require('path');

const app = express();

// init view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server started on ${PORT}...`);
});

module.exports = app;
