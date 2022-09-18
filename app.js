require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// servir contenido estático
app.use( express.static('public') );

/*
app.get('/', (req, res) => {
    res.send('Home Page');
})*/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hisahito',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Hisahito',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Hisahito',
        titulo: 'Curso de Node'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 
