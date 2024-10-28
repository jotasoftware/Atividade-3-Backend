const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const formRoutes = require('./routes/formRoutes');
app.use('/form', formRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Tela incial</h1><a href="http://localhost:3000/tela2">Migrar pra tela secundaria</a>');
})
app.get('/tela2', (req, res) => {
    res.send('<h1>Tela secundária</h1><a href="http://localhost:3000">Tela Inicial</a>');
})
app.get('/invertido', (req, res) => {
    res.send('<h1>Digite um texto e veja ele aparecendo de maneira invertida</h1><a href="http://localhost:3000">Tela Inicial</a>');
})
app.get('/invertido/:text', (req, res) => {
    let text = req.params.text
    let textInvertido = text.split('').reverse().join('');
    res.send(textInvertido + '<a href="http://localhost:3000">Tela Inicial</a>');
})

app.listen('3000', () => {
    console.log('http://localhost:3000')
})
