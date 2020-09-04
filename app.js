const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

//init app

const app = express();

//body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//public folder declaration for static files
app.use(express.static(path.join(__dirname, 'public')));

//view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log('Server running on port' +port);
});



