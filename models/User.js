const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Username required'],
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email required'],
            validate: {
                validator: function(v) {
                    return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email`
            }
        },
        thoughts: [
            {
                // references the Thought ObjectId
            }
            // Array of _id values referencing the Thought model
        ],
        friends: [
            {
                // references the User ObjectId
            }
            // Array of _id values referencing the User model (self-reference)
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