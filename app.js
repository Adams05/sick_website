const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// init view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});

module.exports = app;
