const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const Flashcard = require('./flashcard.js')
var flashcard = new Flashcard();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index.ejs'));

app.get('/create', (req, res) => res.render('create.ejs'));

app.post('/deck', (req, res) => {
  flashcard.create(req.body.original, req.body.translation)
  console.log(flashcard._object)
  res.redirect('/deck')
})

app.get('/deck', (req, res) => {
  res.send(flashcard._object);
})

app.listen('3000', () => console.log('Please go to localhost:3000 in your browser'));
