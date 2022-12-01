const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// ! functions will use req.params.thoughtId !

// /api/users/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(removeReaction);
// ! functions will use req.params.thoughtId and req.params.reactionId !

module.exports = router;