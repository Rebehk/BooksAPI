const CommentModel = require("../models/commentModel");

const addComentario = async (req, res) => {
    try {
        const { bookId } = req.params;
        const comment = await CommentModel.create(req.body);
        res.redirect(`/livro${bookId}`);
    } catch (error) {
        res.send(error.message);
    }
};