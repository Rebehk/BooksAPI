const axios = require("axios");

const selecionaLivro = async (req, res) => {
    try {
        const books = [];
        res.render("search", { books });
    } catch (error) {
        res.send(error.message);        
    }
};

const buscaLivro = async (req, res) => {
    try {
        const {search} = req.body;
        const maxResults = 20;
        const apiKey = 'AIzaSyCJyPMLrC-kFzO7oWgGEqAz269qM71xcfg';
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor&${apiKey}&maxResults=${maxResults}`);
        const books = response.data.items;
        res.render("search", { books });        
    } catch (error) {
        res.send(error.message);
    }
}

const detalhaLivro = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    selecionaLivro,
    buscaLivro,
}