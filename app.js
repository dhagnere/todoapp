const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let ejs = require('ejs');
//port
const port = 3000;

//init app
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'toDoApp';
const client = new MongoClient(url, { useNewUrlParser: true });


//body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//public folder declaration for static files
app.use(express.static(path.join(__dirname, 'public')));

//view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//connect to mongoDb
client.connect(function (err) {
  assert.equal(null, err);
  console.log('mongoDB connected');
  const db = client.db(dbName);
  if (err) throw err;

  Todos = db.collection('todos');

  app.listen(port, () => {
    console.log('Server running on port ' + port);
  });
});
 

//routes setup
app.get('/', (req, res, next) => {
  Todos.find({}).toArray((err, todos) => {
    if (err) {
      return console.log(err);
    }
    console.log(todos);
    res.render('index' , {
      todos: todos
    });
  });
});




