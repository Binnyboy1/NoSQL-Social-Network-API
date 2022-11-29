const { User, Thought } = require('../models');

const userController = {
    // get all users
    getUsers(req, res) {
        // find() on User
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // get single user by id
    getSingleUser(req, res) {
        // findOne() on User
        // use .populate to populate friends and thoughts for that User
        // ex: .populate('freinds')
    },

    // create a new user
    createUser(req, res) {
        // create on User
    },

    // update a user
    updateUser(req, res) {
        // findOneAndUpdate
    },

    // delete user (BONUS: and delete associated thoughts)
    deleteUser(req, res) {
        // findOneAndDelete
    },

    // add friend to friend list
    addFriend(req, res) {
        // findOneAndUpdate
        // use $addToSet - reference activity 23, controller/postController - check out how it's being used in the createPost
    },

    // remove friend from friend list
    removeFriend(req, res) {
        // findOneAndUpdate
        // use $pull
    }
};

module.export = userController;