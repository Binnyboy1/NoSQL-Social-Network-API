const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getThoughts(req, res) {
        // use find() on your Thought model
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // get single thought by id
    getSingleThought(req, res) {
        // use findOne() on Thought model
    },

    // create a thought
    createThought(req, res) {
        // use create() on Thought model
    },

    // update thought
    updateThought(req, res) {
        // findOneAndUpdate() on Thought model
    },

    // delete thought
    deleteThought(req, res) {
        // findOneAndRemove() on Thought model
    },

    // add a reaction to a thought
    addReaction(req, res) {
        // findOneAndUpdate()
        // use $addToSet - reference activity 23, controllers/postController - check out how it's being used in the createPost
    },

    // remove a reaction from a thought
    removeReaction(req, res) {
        // findOneAndUpdate()
        // use $pull
    }
};

module.exports = thoughtController;