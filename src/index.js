const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index.ejs'));

app.get('/create', (req, res) => res.render('create.ejs'));

app.listen('3000', () => console.log('Please go to localhost:3000 in your browser'));
