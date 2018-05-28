const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/views'));

app.get('/', (req, res) => res.render('index'));

app.listen('3000', () => console.log('Please go to localhost:3000 in your browser'));
