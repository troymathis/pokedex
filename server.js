const express = require('express');
const app = express();
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon')
app.listen(3000, () => {
    console.log('express is listening on port 3000...');
});

// Index

app.get('/', (req,res) => {
    res.render('index.ejs', {data: pokemon});
});

// New



// Delete



// Update



// Create



// Show