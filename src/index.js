const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const Flashcard = require('./flashcard.js')
let flashcard = new Flashcard();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index.ejs'));

app.get('/create', (req, res) => res.render('create.ejs'));

app.post('/deck', (req, res) => {
  console.log('original', req.body.original)
  console.log('translation', req.body.translation)
  res.redirect('/')
})

app.listen('3000', () => console.log('Please go to localhost:3000 in your browser'));
