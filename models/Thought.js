const { Schema, model } = require('mongoose');
let dateFormat = require('dateformat');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: [true, 'Cannot have empty post'],
            // Must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return dateFormat(date);
            }
        },
        username: {
            type: String,
            required: [true, 'Username required']
        },
        reactions: [
            {
                // references the Reaction ObjectId
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
            }
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
)

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;