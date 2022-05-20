const express = require('express');
const app = express();
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.listen(3000, () => {
    console.log('express is listening on port 3000...');
});

// Index

app.get('/', (req,res) => {
    res.render('index.ejs', {data: pokemon});
});

// New

app.get('/new', (req,res) => {
    res.render('new.ejs');
});

// Delete



// Update



// Create



// Show

app.get('/info/:id', (req,res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
    });
});