const axios = require("axios");
const apiKey = 'AIzaSyCJyPMLrC-kFzO7oWgGEqAz269qM71xcfg';

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
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&${apiKey}&maxResults=${maxResults}`);
        const books = response.data.items;
        res.render("search", { books });        
    } catch (error) {
        res.send(error.message);
    }
}

const detalhaLivro = async (req, res) => {
    try {
        const { bookId } = req.params;
        console.log("entrou");
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookId}&key=${apiKey}`);
        if (response.data.totalItems === 0) {
            const status = 404;
            const message = "Livro não encontrado";
            res.render("error", {status, message});
        } else {
            const book = response.data.items[0].volumeInfo;
            res.render("teste", { book });
        };
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    selecionaLivro,
    buscaLivro,
    detalhaLivro,
}