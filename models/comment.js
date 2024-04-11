const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;//define the sctructure of data that later will be added to the collection

const commentSchema = new Schema({
    c_name: {
        type: String,
        required: true
    },
    c_comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;