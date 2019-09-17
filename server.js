const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');


//HBS Helpers
require('./hbs/helpers/helpers');
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    //res.send(salida);
    res.render('home', {
        nombre: 'Hamlet',
        anio: new Date().getFullYear()
    })
});
app.get('/about', (req, res) => {
    //res.send(salida);
    res.render('about', {

        anio: new Date().getFullYear()
    })
});


app.listen(port, () => {
    console.log(`Escuchar cambios puertos ${port}`);
})