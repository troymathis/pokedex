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
    res.render('index.ejs', {pokemon: pokemon});
});

// New

app.get('/new', (req,res) => {
    res.render('new.ejs');
});

// Delete

app.delete('/info/:id', (req,res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/');
})

// Update

app.put('/info/:id', (req,res) => {
    pokemon[req.params.id] = req.body;
    res.redirect('/');
})

// Create



// Edit

app.get('/edit/:id', (req,res) => {
    res.render('edit.ejs', {pokemon: pokemon[req.params.id], id: req.params.id});
});

// Show

app.get('/info/:id', (req,res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
    });
});