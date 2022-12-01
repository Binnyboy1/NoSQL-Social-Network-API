const { User, Thought } = require('../models');

const userController = {
    // get all users
    getUsers(req, res) {
        // find() on User
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // get single user by id
    getSingleUser(req, res) {
        // findOne() on User
        // use .populate to populate friends and thoughts for that User
        // ex: .populate('friends')
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a new user
    createUser(req, res) {
        // create on User
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // update a user
    updateUser(req, res) {
        // findOneAndUpdate
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // delete user (BONUS: and delete associated thoughts)
    deleteUser(req, res) {
        // findOneAndDelete
        User.findOneAndRemove({ _id: req.params.userId })
            // responsible for deleting associated thoughts
            /*
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.userId },
                        { $pull: { thoughts: req.params.userId } },
                        { new: true }
                    )
            )
            */
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id! Process failed!' })
                    : res.json({ message: 'User deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // add friend to friend list
    addFriend(req, res) {
        // findOneAndUpdate
        // use $addToSet - reference activity 23, controller/postController - check out how it's being used in the createPost
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.userId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // remove friend from friend list
    removeFriend(req, res) {
        // findOneAndUpdate
        // use $pull
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { responseId: req.params.responseId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
};

module.export = userController;