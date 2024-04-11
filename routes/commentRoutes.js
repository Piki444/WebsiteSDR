const express = require('express');
const commentController = require ('../controllers/commentController');

const router = express.Router();

router.get('/', commentController.comment_index);
router.post('/', commentController.comment_new);
router.post('/:id/delete', commentController.comment_delete);

module.exports = router;