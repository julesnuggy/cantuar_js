const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Flashcard = require('./flashcard.js');
const Session = require('./session.js');
var flashcard = new Flashcard();
var session, selectedCard;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index.ejs'));

app.get('/create', (req, res) => res.render('create.ejs'));

app.post('/deck', (req, res) => {
  flashcard.create(req.body.original, req.body.translation);
  session = new Session(flashcard._object);
  res.redirect('/deck');
})

app.get('/deck', (req, res) => {
  res.render('deck.ejs', { data: flashcard._object } );
})

app.get('/practice', (req, res) => {
  selectedCard = session.select();
  res.render('practice.ejs', { data: selectedCard } );
})

app.get('/clear_home', (req,res) => {
  session.clearHistory();
  res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => console.log(`App is now running from port ${process.env.PORT || 3000}`));
