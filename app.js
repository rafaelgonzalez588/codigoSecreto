const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    var data = ""
    data = req.params.nombre.toUpperCase
   res.send( '<h1>Hola ' + data +'!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));