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
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                // references the User ObjectId
                type: Schema.Types.ObjectId,
                ref: 'User',
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
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;