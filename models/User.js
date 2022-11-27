const { Schema, model } = require('mongoose');

const userSchema = new Scheme (
    {
        username: {

        },
        email: {

        },
        thoughts: [
            {
                // references the Thought ObjectId
            }
        ],
        friends: [
            {
                // references the User ObjectId
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// virtual for friendCount = reference activities 21 and 23

const User = model('User', userSchema);

module.exports = User;