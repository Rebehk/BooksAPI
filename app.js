var express = require('express');
var app = express();

const port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    res.render('home');
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});