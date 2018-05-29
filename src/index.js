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
  let flashObject
  // flashObject = JSON.stringify(flashcard._object);
  flashObject = flashcard._object;
  console.log('data', flashObject)
  res.render('deck.ejs', { data: flashcard._object } )
})

app.listen(process.env.PORT || 3000, () => console.log(`App is now running from port ${process.env.PORT || 3000}`));
