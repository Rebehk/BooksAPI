const connectToDatabase = require("./database/mongodb");
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require("path");
const dotenv = require('dotenv');

const BookController = require('./controllers/BookController');

const port = 3000;

dotenv.config();
connectToDatabase();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/teste", BookController.selecionaLivro);
app.post("/search", BookController.buscaLivro);
app.get("/livro/:bookId", BookController.detalhaLivro);

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = {
    app,
}