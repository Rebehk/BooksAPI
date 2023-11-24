const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;
