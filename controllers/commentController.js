const Comment = require('../models/comment');

const comment_index = (req, res) => {
    Comment.find().sort({createdAt: -1})
        .then((result) => {
            res.render('comments',  {title: 'Comments', comments: result});
        })
        .catch((err) => {
            console.log(err);
        });
}

const comment_new = (req, res) => {
    const comment = new Comment(req.body);
    comment.save()
        .then((result) =>{
            res.redirect('/comments')
        })
        .catch((err) => {
            console.log(err);
        });
}

const comment_delete = (req, res) => {
    const commentId = req.params.id;
    Comment.findByIdAndDelete(commentId)
        .then((result) => {
            res.redirect('/comments');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error deleting comment");
        });
}

module.exports = {
    comment_index,
    comment_new,
    comment_delete
}