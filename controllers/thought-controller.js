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
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            // .populate('reactions')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a thought
    createThought(req, res) {
        // use create() on Thought model
        Thought.create(req.body)
            .then((thought) => {

                User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { runValidators: true, new: true }
                )
                    .then((user) =>
                        !user
                            ? res.status(404).json({ message: 'No user with this id!' })
                            : res.json(thought)
                    )
                    .catch((err) => res.status(500).json(err));

            })
            .catch((err) => res.status(500).json(err));
    },

    // update thought
    updateThought(req, res) {
        // findOneAndUpdate() on Thought model
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // delete thought
    deleteThought(req, res) {
        // findOneAndRemove() on Thought model
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            // responsible for deleting associated reactions
            /*
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : Thought.findOneAndUpdate(
                        { reactions: req.params.thoughtId },
                        { $pull: { reactions: req.params.thoughtId } },
                        { new: true }
                    )
            )
            */
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id! Process failed!' })
                    : res.json({ message: 'Thought deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // add a reaction to a thought
    addReaction(req, res) {
        // findOneAndUpdate()
        // use $addToSet - reference activity 23, controllers/postController - check out how it's being used in the createPost
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.params.thoughtId } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // remove a reaction from a thought
    removeReaction(req, res) {
        // findOneAndUpdate()
        // use $pull
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { thoughtId: req.params.thoughtId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
};

module.exports = thoughtController;